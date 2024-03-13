import React from 'react'
import Button from '../formUtils/Button'
import {isEqual} from 'lodash'

const Child = ({counter,countHandler}) => {
  console.log('child rendering')
  return (
    <>
      <strong>Child Component</strong>
      <div>count: {counter}</div>
      <Button onClick={countHandler}>Increment from child</Button>
    </>
  )
}

export default React.memo(Child,isEqual)
