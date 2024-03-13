import React, { useContext } from 'react'
import UserContext, { UserConsumer } from './UserContext'


export const ContextCompF = () => {
    const value = useContext(UserContext)
  return (
        // <UserConsumer>
        //     {
        //         (a)=>{
        //           return  <div>{a}</div>
        //         }
        //     }
        // </UserConsumer>
        // or
        <div>Hello {value}</div>
  )
}
