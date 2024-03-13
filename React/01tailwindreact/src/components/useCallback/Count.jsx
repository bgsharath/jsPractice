import React from 'react'

const Count = ({count,text}) => {
    console.log('render Count',text)
  return (
    <div>Count: {count}</div>
  )
}

export default React.memo(Count)
