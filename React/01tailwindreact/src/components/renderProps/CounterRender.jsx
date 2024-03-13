import React, { useState } from 'react'

export const CounterRender = (props) => {

  const [count, setCount] = useState(0)

  function incrementCounter(){
    setCount(prev=>prev+1)
  }

  return (
    <>
        {props.children(count,incrementCounter)}
    </>
  )
}
