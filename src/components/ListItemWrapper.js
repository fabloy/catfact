import ListItem from "./ListItem";


const ListItemWrapper = ({result, setImage,randomValue, setTitle})=>{

  return(
        <ul className="listItemWrapper w-5/5 ">
        { 
         result?.data.map((item, index)=>{
          return (
           <ListItem
            key={index} 
            item={item} 
            setTitle={(t)=>setTitle(t)} 
            image={`https://placekitten.com/400/${randomValue}${index}`}
            setImage={(img)=>setImage(img)} 
           />
          )
         })
        }
       </ul> 
    )
    
}

export default ListItemWrapper