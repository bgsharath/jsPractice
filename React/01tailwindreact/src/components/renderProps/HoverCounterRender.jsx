import React from 'react'

export const HoverCounterRender = ({count,incrementCounter}) => {
  return (
    <h1 onMouseOver={incrementCounter}>Hovered {count} times</h1>
  )
}