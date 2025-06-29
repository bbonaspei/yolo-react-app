import './ImageView.css'
import React from 'react';

function ImageView({imageUrl}){
    return(
        <div>
            <h3>Yüklenen Fotoğraf</h3>
            {imageUrl ? (<img src={imageUrl} alt="Yüklenen Görsel" style={{maxWidth: '400px'}}/>
            ): (<p>Henüz bir fotoğraf yüklenmedi.</p>)}
        </div>
    );
}
export default ImageView