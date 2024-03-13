import { useState } from 'react'

export const useInput = () => {
  const [text,setText] = useState('')

  const bind = {
    value : text,
    onChange:((e)=>{
        setText(e.target.value)
    })
  }

  return [text,bind]
}
