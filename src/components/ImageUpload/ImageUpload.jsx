import React from 'react';

function ImageUpload({onImageUpload}){
    const handleFileChange=(event)=>{
        const file=event.target.files[0];
        if(file){
            onImageUpload(file);

        }
    };
    return(
        <div>
            <h3>Fotoğraf Yükle</h3>
            <input type="file" accept="image/*" onChange={handleFileChange}/>
        </div>
    );
}
export default ImageUpload