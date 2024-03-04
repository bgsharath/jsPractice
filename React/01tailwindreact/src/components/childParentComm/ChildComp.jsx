import React from 'react'

const ChildComp = ({handleClick}) => {

   const clickHandler = (msg) =>{
    handleClick(msg)
   } 

  return (
    <button className='bg-blue-500 m-2 py-2 px-4 rounded' onClick={()=>clickHandler('Hello from child component')}>Greet Parent</button>
  )
}

export default ChildComp