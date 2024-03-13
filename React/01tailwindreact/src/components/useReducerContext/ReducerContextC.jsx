import React from 'react'
import { counterContext } from './ReducerContextA'
import { useContext } from 'react'
import Button from '../formUtils/Button'

export const ReducerContextC = () => {
  const {contextCount,contextDispatch} = useContext(counterContext)
  return (
    <div>
      ReducerContextC
      count:{contextCount}
      <Button type='button' onClick={() => contextDispatch("inc")}>Increment</Button>
      <Button type='button' onClick={() => contextDispatch("dec")}>Decrement</Button>
      <Button type='button' onClick={() => contextDispatch("reset")}>Reset</Button>
    </div>
  )
}
