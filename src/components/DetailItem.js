import { NavLink } from 'react-router-dom';
import React from 'react';

const DetailItem =({title, image})=>{
    
   
 return(
        <main className='detailWrapper'>
            <h4 className='titleDetailItem'> 
             {title}
            </h4>
            <div className='shadow-md'>
             <img className='rounded ' src={image}>
             </img>
            </div>
            
             <section 
             className='house'
             >
             <NavLink className="inline" to={`/`}>
              <i className="houseIcon fa-solid fa-house "></i>
             </NavLink>
             </section>
            
           
        </main>
    )
}

export default DetailItem