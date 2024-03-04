import React, { useState } from 'react'

const ExampleEvent = () => {

    const [name,setName] = useState('')

    function changeHandler(){
        console.log(this) // undefined
        setName('Hello')
    }

    const changeHandlerArrow = () => {
      console.log(this) // undefined
      setName('Hello')
    }

    const changeHandlerArrowEvent = (event,number) => {
      console.log(event,number) 
      setName('Hello')
    }
    
  return (
   <>
      <h1>{name}</h1>
      <button className='bg-blue-500 py-2 px-4 rounded' onClick={()=>changeHandlerArrow}>update name click function</button>
      <button className='bg-blue-500 ml-2 py-2 px-4 rounded' onClick={changeHandlerArrow}>update name</button>
      <button className='bg-blue-500 ml-2 py-2 px-4 rounded' onClick={(event)=>changeHandlerArrowEvent(event,2)}>update name with event</button>
   </>
  )
}

export default ExampleEvent