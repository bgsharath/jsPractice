import React from 'react'
import Button from '../formUtils/Button'
import { useCounterWithTitle } from './useCounterWithTitle'
import Input from '../formUtils/Input'
import { useInput } from './useInput'

export const CustomHookParent = () => {
    const [count5,setCountTitle] = useCounterWithTitle(0,5)
    const [count10,setCountTitle10] = useCounterWithTitle(0,10)
    const [first,bindFirst] = useInput()
    const [last,bindLast] = useInput()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(first,last)
    }
  return (
    <>
        Count1 : {count5}<br/>
        Count2 : {count10}<br/>
        <Button onClick={setCountTitle}>+5</Button>
        <Button onClick={setCountTitle10}>+10</Button><br/>

        {first}<br/>
        {last}<br/>
        <form onSubmit={onSubmitHandler}>
            <Input type='text' placeholder='First Name' {...bindFirst} />
            <Input type='text' placeholder='Last Name' {...bindLast} />
            <Button>Submit</Button>
        </form>
    </>
  )
}
