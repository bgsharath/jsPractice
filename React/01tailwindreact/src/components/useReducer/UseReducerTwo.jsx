import React, { useReducer } from "react";
import Button from "../formUtils/Button";

const initialState = {
    firstCounter:0,
    secondCounter:0
}

const reducer = (state, action) => {
    switch (action.type) {
      case "incCounter1":
        return {...state, firstCounter:state.firstCounter+action.value};
      case "decCounter1":
        return {...state, firstCounter:state.firstCounter-action.value};
      case "incCounter2":
        return {...state, secondCounter:state.secondCounter+action.value};
      case "decCounter2":
        return {...state, secondCounter:state.secondCounter-action.value};
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

export const UseReducerTwo = () => {
  const [count, setCount] = useReducer(reducer, initialState);
  return (
    <>      
      <h1><b>FIRST COUNTER:</b> {count.firstCounter}</h1>
      <h1><b>SECOND COUNTER:</b> {count.secondCounter}</h1>
      <Button type='button' onClick={() => setCount({type:'incCounter1',value:1})}>+ Counter1</Button>
      <Button type='button' onClick={() => setCount({type:'decCounter1',value:1})}>- Counter1</Button>
      <Button type='button' onClick={() => setCount({type:'incCounter2',value:1})}>+ Counter2</Button>
      <Button type='button' onClick={() => setCount({type:'decCounter2',value:1})}>- Counter2</Button>
      <Button type='button' onClick={() => setCount({type:'incCounter1',value:5})}>+5 Counter1</Button>
      <Button type='button' onClick={() => setCount({type:'decCounter1',value:5})}>-5 Counter1</Button>
      <Button type='button' onClick={() => setCount({type:'incCounter2',value:5})}>+5 Counter2</Button>
      <Button type='button' onClick={() => setCount({type:'decCounter2',value:5})}>-5 Counter2</Button>
      <Button type='button' onClick={() => setCount({type:'reset'})}>Reset</Button>
    </>
  );
};
