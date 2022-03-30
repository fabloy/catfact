
import { NavLink } from 'react-router-dom';

const ListItem =({item, setTitle, image, setImage, endpoint})=>{
  
  return(
        <li className='card'>
         <div className='imageWrapper'>
           <img alt="cat" src={image}></img>
         </div>
         
         <p className='textTitle'>
          {`${item.fact.substring(0,20)} ...`}
         </p>
          <div className='buttonWrapper'>
          <NavLink style={{"display":"block"}} to={`/detail`}>
           <button onClick={()=>{ 
               setTitle(item.fact)
               setImage(image)
               }}>
              <p className='font-semibold text-violet-500'>
                Detail 
              </p> 
            </button>
          </NavLink>
          </div>
        </li>
    )
}

export default ListItem