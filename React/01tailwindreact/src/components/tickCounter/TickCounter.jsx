import React, { useEffect, useState } from 'react'

export const TickCounter = () => {

    // counter will not increment to do so use prev state

  const [count,setCount] = useState(0)

  function tick(){
    setCount(prev=>prev+1)
  }

  useEffect(()=>{
    const interval = setInterval(tick,1000)
    tick()
    return ()=>{
        clearInterval(interval)
    }
  },[])

  return (
    <div>{count}</div>
  )
}
