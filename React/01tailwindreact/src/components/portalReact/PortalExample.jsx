import React from 'react'
import { Modal } from './Modal'

export const PortalExample = () => {
  return(
    <>
    <h1>Click on model pop up see console</h1>
    <div onClick={()=>console.log('parent clicked , event delegation also works using portals')} >
      <h1 style={{display:'block'}}>If we hide this parent component the model should work</h1>
      <Modal/>
    </div>
    </>
  )
}
