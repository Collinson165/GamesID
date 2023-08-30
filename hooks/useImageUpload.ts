/**
 *  Custom hook for uploading images to Azure Blob Stroage.
 * 
 * @returns {object} An object containing the imageUrl, error, isLoading and uploadImage function.
 * 
 */

import { useState } from 'react';



const useImageUpload = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    

    

    const uploadImage = async (containerName : string, file: File) : Promise<void | object> => {
        /**
         * @param {string} containerName - The Name of the Container to upload images to.
         * @param {object} file - The Media file to be uploaded.
         */
        const queryString: string =`?container=${encodeURIComponent(containerName)}`
        if (!file) return;
        const formData: FormData = new FormData();
        formData.append('image', file);
        console.log(formData)

        try {
            setIsLoading(true)
            setError(null)
            const response = await fetch(`/api/upload${queryString}`, {
                method: 'POST',
                body: formData,
            });
            
            const result = await response.json();
            console.log(result)
            setImageUrl(result.url);
        } catch(error){
            setError(error)
            console.error('Erro000r Uploading Image:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return {imageUrl, error, isLoading, uploadImage };

    
};

export default useImageUpload;