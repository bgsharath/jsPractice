import React, { useEffect, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(count)
  },[count])

  const increment = () => {
    //setCount(count + 1);
        // for fitime increment
        setCount((prev)=>(
            prev+1
        ))
    console.log("syncronous",count)
  };

  const incFive = () => {
    increment()
    increment()
    increment()
    increment()
    increment()
  }

  return (
    <>
      <div>count{count}</div>
      <button onClick={incFive}>Increment</button>
    </>
  );
};

export default Example;
