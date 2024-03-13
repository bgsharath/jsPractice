import React, { useState } from 'react'
import withComponent from './withComponent'

const HoverCounter = ({name,count,handler}) => {
  return (
    <>
        <div onMouseOver={handler}>{name} Hoverd {count} times</div>
    </>
  )
}

export default withComponent(HoverCounter,4)
