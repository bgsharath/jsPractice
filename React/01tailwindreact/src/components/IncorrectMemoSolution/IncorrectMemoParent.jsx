import React, { useCallback, useMemo, useState } from 'react'
import Button from '../formUtils/Button'
import { MemozedChildComp } from './MemozedChild';

export const IncorrectMemoParent = () => {
    const [counter,setCounter] = useState(0);
    const [name,setName] = useState('Sharath')

    const person = {
        name:'sh',
        age:24
    }

    const personMemozed = useMemo(()=>person,[])

    const clickHandle = () => {}

    const clickHandleMemozed = useCallback(()=>clickHandle,[])

  return (
    <>
        <Button onClick={()=>setCounter(counter+1)}>inc {counter}</Button>
        <Button onClick={()=>setName('bg')}>Change Name {name}</Button>
        <MemozedChildComp name={name} person={personMemozed} clickHandle={clickHandleMemozed}/>
    </>
  )
}

// child render even if click on increment btn 
