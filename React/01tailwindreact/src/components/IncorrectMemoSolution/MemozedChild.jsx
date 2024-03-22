import React from 'react'

const MemozedChild = ({name,person}) => {
    console.log('Child render')
  return (
    <div>{name}</div>
  )
}

export const MemozedChildComp = React.memo(MemozedChild)
