/* eslint-disable @next/next/no-img-element */
`use client`
import { ChangeEvent, useState } from 'react';
import useImageUpload from '../hooks/useImageUpload';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState<any>(null)
    const { imageUrl, error, isLoading, uploadImage } = useImageUpload();

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedImage(e.target.files?.[0]);
        console.log(selectedImage)
    }

    const handleImageUpload = () => {
        const file = selectedImage;
        console.log(file)
        uploadImage('test-picture', file);

    };

    return (
        <div>
            <input type="file"
            onChange={handleImageChange}
            />

            <button onClick={handleImageUpload}>Upload</button>
            {isLoading && <p>Uploading...</p>}
            {error && <p>Error: {error.message}</p>}
            {imageUrl && <img src={imageUrl} alt='uploaded' />}
        </div>
    )

    
};

export default ImageUpload;