import React, { useReducer } from 'react'
import { ReducerContextB } from './ReducerContextB';
import { ReducerContextC } from './ReducerContextC';
import { ReducerContextD } from './ReducerContextD';

const initialState = 2;

const reducer = (state, action) => {
    switch (action) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

export const counterContext = React.createContext()

export const ReducerContextA = () => {
  
  const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <>
        <h1 className='font-extrabold'>Global counter sate management using useReducer with context</h1>
        {count}
        <counterContext.Provider value={{contextCount:count,contextDispatch:dispatch}}>
            <ReducerContextB/>
            <ReducerContextC/>
            <ReducerContextD/>
        </counterContext.Provider>
    </>
  )
}
