import React, { useState } from 'react'
import Button from '../formUtils/Button'

export const UseState = () => {
    console.log('render')
    const [count,setCount] = useState(0)
  return (
  <>
    <h1>count:{count}</h1>
    <Button onClick={()=>setCount(count+1)}>+1</Button>
    <Button onClick={()=>setCount(0)}>+0</Button>
    <Button onClick={()=>setCount(5)}>+5</Button>
  </>    
  )
}
