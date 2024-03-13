import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count  from './Count'
import IncrementButton from './IncrementButton'

export const UseCallbackParent = () => {

    const [ageCount,setAgeCount] = useState(20)
    const [salaryCount,setSalaryCount] = useState(20000)

    const incrementAgeHandler = useCallback(() => {
        setAgeCount(ageCount+1)
    },[ageCount])    

    const incrementSalaryHandler = useCallback(()=>{
        setSalaryCount(salaryCount+1)
    },[salaryCount])

  return (
    <>
        <Title/>
        <Count text='age' count={ageCount}/>
        <IncrementButton onClick={incrementAgeHandler}>Increment Age</IncrementButton>
        <Count text='salary' count={salaryCount}/>
        <IncrementButton onClick={incrementSalaryHandler}>Increment Salary</IncrementButton>
    </>
  )
}
