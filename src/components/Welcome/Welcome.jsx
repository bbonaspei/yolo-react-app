import './Welcome.css'
import React from 'react';

function Welcome({user}){
    if(!user){
        return null;
    }

return(
    <div>
        <h2>Hoş Geldin, {user.name} {user.surname}</h2>
    </div>
 );
}
export default Welcome