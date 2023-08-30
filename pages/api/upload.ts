import { BlobServiceClient } from '@azure/storage-blob';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import mime from 'mime'
import { NextResponse } from 'next/server';
dotenv.config();

export async function POST(req, res){
    const { searchParams } = new URL(req.url) 
    const container: string | null = searchParams.get('container')
    
    const formData: FormData = await req.formData();
    const imageFile: any = formData.get("image");
    const fileExtension = mime.getExtension(imageFile.type);
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION!);
    const containerClient = blobServiceClient.getContainerClient(container!)


    // Check if azure container Exists and Create it if it does not exist
    try {
        console.log('Checking Azure Container')
        const containerExists = await containerClient.exists();
        if(!containerExists){
            await containerClient.create();
            console.log('Azure Container Created')
        }else{
            console.log('Container Already Exists')
        }
    }catch(error){
        console.error('Azure Container Error:', error);
    }


    
    // Save the image file to the azure container
    try {
        if(!imageFile){ 
            return res.status(400).json({
                error: 'Image file not found in form data'
            })
        }
        const blobName = `${container}-${Date.now()}-${uuidv4()}.${fileExtension}`;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName)
        const imageArrayBuffer = await imageFile.arrayBuffer();
        const imageBuffer = Buffer.from(imageArrayBuffer)
        console.log(typeof(imageBuffer))
        await blockBlobClient.uploadData(imageBuffer);
        const imageUrl = blockBlobClient.url;
        console.log(imageUrl)
        return NextResponse.json({ url : imageUrl})
    }catch(error){
        console.error('Error uploading image to azure:', error);
    }
}