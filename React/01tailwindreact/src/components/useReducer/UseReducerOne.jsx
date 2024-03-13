import React, { useReducer } from "react";
import Button from "../formUtils/Button";

const initialState = 0;

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

export const UseReducerOne = () => {
 

  const [count, setCount] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{count}</h1>
      <Button type='button' onClick={() => setCount("inc")}>Increment</Button>
      <Button type='button' onClick={() => setCount("dec")}>Decrement</Button>
      <Button type='button' onClick={() => setCount("reset")}>Reset</Button>
    </>
  );
};
