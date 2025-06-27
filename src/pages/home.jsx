import React,{useState } from 'react';
import Welcome from '../components/Welcome/Welcome.jsx';
import ImageUpload from '../components/ImageUpload/ImageUpload.jsx';
import ImageView from '../components/ImageView/ImageView.jsx';

function Home({user}){
    const [imageUrl,setImageUrl]=useState(null);
    const handleImageUpload=(file)=>{
        const tempUrl=URL.createObjectURL(file);
        setImageUrl(tempUrl);
    };
    return(
        <div>
           <Welcome user={user}/>
            <hr/>
            <ImageUpload onImageUpload={handleImageUpload}/>
           <ImageView imageUrl={imageUrl}/>
        </div>
    );
}
export default Home;