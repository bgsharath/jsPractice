import { useState } from 'react'
import Example from './components/setState/Example'
import ExampleEvent from './components/eventcomp/ExampleEvent'
import ParentComp from './components/childParentComm/ParentComp'
import { ExampleConditional } from './components/conditional/ExampleConditional'
import ExampleCss from './components/cssModule/ExampleCss'
import { ExampleForm } from './components/formBasic/ExampleForm'
import Parent from './components/pureComp/Parent'
function App() { 

  return (
    <div className='text-center'>
      {/* <Example/> */}
      {/* <ExampleEvent/> */}
      {/* <ParentComp/> */}
      {/* <ExampleConditional/> */}
      {/* <ExampleCss/> */}
      {/* <ExampleForm/> */}
      <Parent/>      

    </div>
  )
}

export default App
