import React from 'react';
import NavButtons from './NavButtons';

const NavComponent = ({
                       goToLastPage, 
                       goToFirstPage, 
                       currentPage,
                       incrementPage,
                       decrementPage,
                       results
                       })=>{
  return(
   <nav className='navWrapper'>
    <NavButtons
     currentPage={currentPage}
     goToLastPage={goToLastPage}
     goToFirstPage={goToFirstPage} 
     incrementPage={incrementPage}
     decrementPage={decrementPage}>
    </NavButtons>
    <p className='text-sm text-grey-500'>
     results: 
     <strong className='text-violet-500'>
      {results}
     </strong>
    </p>
    
   </nav>
    )
}

export default NavComponent