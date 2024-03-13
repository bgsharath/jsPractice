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

export const UseReducerThree = () => { 

  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{countOne}</h1>
      <Button type='button' onClick={() => dispatchOne("inc")}>Increment</Button>
      <Button type='button' onClick={() => dispatchOne("dec")}>Decrement</Button>
      <Button type='button' onClick={() => dispatchOne("reset")}>Reset</Button>
      <h1>{countTwo}</h1>
      <Button type='button' onClick={() => dispatchTwo("inc")}>Increment</Button>
      <Button type='button' onClick={() => dispatchTwo("dec")}>Decrement</Button>
      <Button type='button' onClick={() => dispatchTwo("reset")}>Reset</Button>
    </>
  );
};
