import React, { useEffect, useRef } from 'react'

export const RefExample = () => {
  const inputRef = React.createRef()
  const cbRef = useRef() // call back ref

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  function getInputValue(){
    console.log(inputRef.current.value)
    console.log(cbRef.current.value)
  }

  return (
    <>
        <input type='text' ref={inputRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <input type='text' ref={cbRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <button className='rounded-lg' onClick={getInputValue}>get input value</button>
    </>
  )
}
