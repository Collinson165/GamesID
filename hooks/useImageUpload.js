import { useState } from 'react';

const useImageUpload = () => {
    const [imageUrl, setImageUrl] = useState('');

    const uploadImage = async (file) => {
        if (!file) return;
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            setImageUrl(result.imageUrl);
        } catch(error){
            console.error('Error Uploading Image:', error);
        }
    }

    return {imageUrl, uploadImage };

    
};

export default useImageUpload;