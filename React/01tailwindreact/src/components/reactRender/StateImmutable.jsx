import React, { useState } from 'react'
import Button from '../formUtils/Button'

export const StateImmutable = () => {

    const [nameObj,setNameObj] = useState({
        fName : 'Sharath',
        lName : 'bg'
    })

    const [nameArr,setNameArr] = useState([
        'Sharath',
        'bg'
    ])

    const onClickObjH = () => {
        // const nameObjClone = {...nameObj}
        // nameObjClone.fName = 'Guru'
        setNameObj({...nameObj,fName:'Guru'})
    }
    const onClickArrH = () => {
        // const nameArrClone = [...nameArr]
        // nameArr.push('Guru')
        setNameArr([...nameArr,'Guru'])
    }

  return (
    <>
        <Button onClick={onClickObjH}>obj click {JSON.stringify(nameObj)}</Button>
        <Button onClick={onClickArrH}>arr click {nameArr.join(' ')}</Button>
    </>
  )
}
