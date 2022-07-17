// import { Button } from "antd";
// import { useEffect, useRef, useState } from "react";

// import usePrevious from "../hooks/usePrevious";
// import useRefState from "../hooks/useRefState";

// const UseRefDemo = () => {
//   const [counter, counterRef, setCounter] = useRefState(0);

//   const onClickCount = () => {
//     setCounter(counterRef.current + 1);
//   };
//   console.log(counterRef.current);
//   return (
//     <div>
//       <p>You clicked {counter} times.</p>
//       <Button onClick={onClickCount}>Click me</Button>
//     </div>
//   );
// };

// const Counter = () => {
//   const [counter, counterRef, setCounter] = useRefState(0);

//   const onClickCount = () => {
//     setCounter(counter + 1);
//   };
//   console.log(counterRef.current); // ==> 1
//   return (
//     <div>
//       <p>You clicked {counter} times.</p>
//       <Button onClick={onClickCount}>Click me</Button>
//     </div>
//   );
// };

// export default UseRefDemo;

import React, { useState } from "react";
import { Button } from "antd";
import useRefState from "../hooks/useRefState";

const Counter = () => {
  const [number, setNumber, numRef] = useRefState(1);
  const [str, changeStr] = useState("现在数字是1");

  const getNum = () => {
    const newStr = "现在数字是" + numRef.current;
    console.log(numRef);
    changeStr(newStr);
  };

  const changeNumber = () => {
    setNumber(number + 1);
    getNum();
  };

  return (
    <div>
      <h1>useRef demo</h1>
      <Button type="primary" onClick={changeNumber}>
        增加+++
      </Button>
      <div>{number}</div>
      <div>{str}</div>
    </div>
  );
};

export default Counter;
