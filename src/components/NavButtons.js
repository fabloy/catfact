import React from 'react';

const NavButtons = ({
 goToLastPage, 
 goToFirstPage,
 incrementPage,
 decrementPage,
 currentPage
})=>{
 const [active, setActive]=React.useState(true)
  return(
   <aside className='buttonWrapperPrimary'>
      <button 
      className='buttonWrapperSecondary  hover:text-violet-500 ' 
      onClick={()=>{
      goToFirstPage()
      setActive(true)
      }
      }>
    1
   </button>
   <button
    className='buttonWrapperSecondary  hover:text-violet-500 '
    onClick={()=>decrementPage()}
   >
    <i className="fa-solid fa-arrow-left"></i>
   </button>
   <p className='m-2 text-sm text-gray-500'>
    Page: 
     <strong 
      className='text-violet-500'>
      {currentPage}
    </strong>
   </p>
   <button
    className='buttonWrapperSecondary  hover:text-violet-500 '
    onClick={()=>incrementPage()}
   >
    <i className="fa-solid fa-arrow-right"></i>
   </button>
   <button 
     className="buttonWrapperSecondary  hover:text-violet-500 "
     onClick={()=>{
      goToLastPage()
      setActive(false)
     }
     }>
     34
   </button>
</aside>
    )
}

export default NavButtons