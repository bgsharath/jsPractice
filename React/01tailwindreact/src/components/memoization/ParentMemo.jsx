import React, { useCallback, useState } from 'react'
import Button from '../formUtils/Button'
import Input from '../formUtils/Input'
import Child  from './Child'
import Title from './Title'
import { useMemo } from 'react'

export const ParentMemo = () => {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    const [name,setName] = useState('')

    const arr=[1,2,3] // HOC memo rerender compare shallo passing non primitive

    const nameHandler = () => {
        setName(event.target.value)
    }
    const countHandler = useCallback(() => {
        setCount(count+1)
    },[count])

    const heavy = useMemo(() => {
      let heavyFunctionResponse = 0
      while(heavyFunctionResponse<1000){      
        heavyFunctionResponse++
      }
      return heavyFunctionResponse
    },[count])

  return (
    <>
    <strong>Parent</strong>
    <Title/>
    COUNT:{heavy}{count}<br/>
    COUNT2:{count2}<br/>
    <Button onClick={countHandler}>Increment</Button>
    <Button onClick={()=>setCount2(count2+1)}>Increment2</Button>
    <Input type='text' placeholder='Enter name' onChange={nameHandler} value={name}/>
    <Child counter={count} countHandler={countHandler} arr={arr} />
    </>
  )
}


/*
In this example <Child/> component is uneccessory rendering any change i.e incremnt count or entering input in parent component
using React.memo HOC we can avoid this

<Title/> component we are not using memo so rendering when parent renders

  1. If we wrap React.memo(Child) <Child/> then child comp will not rerender if parent state changes renders
  2. If we wrap React.memo(Child) <Child counter={count}/> then child will rerender only counter click/changes , 
     It wont rerender for name changes.
  3. If we wrap React.memo(Child) <Child counter={count} countHandler={countHandler}/> then child renders if name changes
     bcoz passing non primitive function to child component will not cahe by memo, for that useCallback shoud use
     ex: const countHandler = useCallback(() => {
            setCount(count+1)
          },[count])
  4. If we use heavy calculation logics to the render all the counter means in parent and child become slow
          solotion useMemo for conter name dependecy so counter 2 wont efffect

  5. will render child whe count2 or name changes also with  arr={arr} props <Child counter={count} countHandler={countHandler} arr={arr} /> need to add loadash isequal to the second argument of memo hoc
          so it comare prev and cur props 
      
*/

