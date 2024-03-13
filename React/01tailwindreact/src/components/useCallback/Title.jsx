import React from 'react'

const Title = () => {
    console.log('render Title')
  return (
    <div>UseCallback Header</div>
  )
}

export default React.memo(Title)
