import React from 'react';
const Card=(props)=>{
    const {name, id, email}=props;
    return(
       <div className=' tc bg-light-green br3 pa3 grow ma2 dib bw2 shadow-5 '>
           <img alt='photo' src={'https://robohash.org/' + id + '?200x200'}/>
           <div>
               <h2>{name}</h2>
               <p>{email}</p>
           </div>
       </div> 
    );
}
export default Card;