import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { BrowserRouter,Routes} from 'react-router-dom';
import DetailItem from './components/DetailItem';
import NavComponent from './components/NavComponent';
import incrementPage from './functions/incrementPage';
import decrementPage from './functions/decrementPage';
import randomNumber from './functions/randomNumber';
import ListItemWrapper from './components/ListItemWrapper';

function App() {
 const [result, setResult]=useState()
 const [page, setPage]=useState(1)
 const [endpoint, setEndpoint]=useState(`https://catfact.ninja/facts?page=1`)
 const [title, setTitle]=useState()
 const [randomValue, setRandomValue] = useState()
 const [image, setImage]=useState()
 
 const changeUrl=(url)=>{
  setEndpoint(url)
 }
 

 useEffect(()=>{
 fetch(endpoint)
 .then(res=>res.json())
 .then(data=>{
  setResult(data)
  setPage(data.current_page)
  setRandomValue(randomNumber())
 })
 },[endpoint])
 
 return (
  <div className="App">
    
   <div className='p-5 bg-pink-100'>
    <h1 className="firstTitle" >
     <i class="fa-solid fa-paw"></i>
     <br></br>
     Catfact 
    </h1>
    
    
   </div>
  
    <BrowserRouter>
     <Routes>
      <Route path="/" element={
        <>
        
         <NavComponent 
          goToLastPage={()=>changeUrl(`https://catfact.ninja/facts?page=34`)}
          goToFirstPage={()=>changeUrl(`https://catfact.ninja/facts?page=1`)}
          incrementPage={()=>changeUrl(`https://catfact.ninja/facts?page=${incrementPage(page)}`)}
          decrementPage={()=>changeUrl(`https://catfact.ninja/facts?page=${decrementPage(page)}`)}
          currentPage={result?.current_page}
          results={result?.data.length}
         />
         <ListItemWrapper 
          result={result}
          randomValue={randomValue}
          setTitle={(t)=>setTitle(t)} 
          setImage={(img)=>setImage(img)}
         />
        </>
      }>
     </Route>

<Route path="/detail" element={
         <DetailItem 
          title={title}
          image={image} 
         />}>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
