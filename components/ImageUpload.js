import useImageUpload from '../hooks/useImageUpload';

const ImageUpload = () => {
    const { imageUrl, uploadImage } = useImageUpload();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        uploadImage(file);

    };

    return (
        <div>
            <input type="text" />
        </div>
    )

    
};

export default ImageUpload;