import React from 'react'

export const ClickCounterRender = ({count,incrementCounter}) => {
  return (
    <button onClick={incrementCounter}>Clicked {count} times</button>
  )
}