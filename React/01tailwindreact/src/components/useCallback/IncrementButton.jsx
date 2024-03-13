import React from 'react'
import Button from '../formUtils/Button'

const IncrementButton = ({onClick,children}) => {
  console.log('render button click',children)
  return (
    <Button onClick={onClick}>{children}</Button>
  )
}

export default React.memo(IncrementButton)
