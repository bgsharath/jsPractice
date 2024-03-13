import React, { useState } from 'react'

const withComponent = (WrappedComponent,increment) => {
    const WithComponent = ({age}) => {
        const [count,setCount] = useState(0)
        function handler(){
            setCount(count+increment)
        }
        return(
            <WrappedComponent name={'sharath'} agePerson={age} handler={handler} count={count}/>
        )
    }
    return WithComponent
}

export default withComponent
