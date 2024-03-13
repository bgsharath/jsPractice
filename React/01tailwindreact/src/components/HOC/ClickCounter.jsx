import React from 'react'
import withComponent from './withComponent'

const ClickCounter = ({name,count,handler,agePerson}) => {
  return (
    <>
        <button onClick={handler}>{name}-{agePerson} Clicked {count} times</button>
    </>
  )
}

export default withComponent(ClickCounter,3)
