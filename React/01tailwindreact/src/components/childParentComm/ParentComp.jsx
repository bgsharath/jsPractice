import React from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {

  const clickHandler = (msg) => {
    console.log(msg)
  }

  return (
    <ChildComp handleClick={clickHandler}/>
  )
}

export default ParentComp