import React from 'react'
import { useState } from 'react'

export const ExampleConditional = () => {
    const [isLoggedIn, setLoggin] = useState(true)
  return (
    <div>
        {isLoggedIn && <span>Sharath</span>}
        {isLoggedIn?.value ?? <div>BG</div>} 
        {/* if property not available in object next to content ?? will display */}
    </div>
  )
}
