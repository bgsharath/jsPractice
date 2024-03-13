import { useState } from 'react'

export const useCounterWithTitle = (initialValue=0,addValue=1) => {
    const [count,setCount] = useState(initialValue)
    function setCounter(){
        setCount(prev=>prev+addValue)
        document.title = count
    }
    return [count,setCounter]
}

// etcounter wuth title update hook