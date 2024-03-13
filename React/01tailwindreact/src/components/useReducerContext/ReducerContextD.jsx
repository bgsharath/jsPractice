import React, { useContext } from 'react'
import { counterContext } from './ReducerContextA'
import Button from '../formUtils/Button'

export const ReducerContextD = () => {
  const {contextCount,contextDispatch} = useContext(counterContext)
  return (
    <div>
      ReducerContextD
      count:{contextCount}
      <Button type='button' onClick={() => contextDispatch("inc")}>Increment</Button>
      <Button type='button' onClick={() => contextDispatch("dec")}>Decrement</Button>
      <Button type='button' onClick={() => contextDispatch("reset")}>Reset</Button>
    </div>
  )
}
