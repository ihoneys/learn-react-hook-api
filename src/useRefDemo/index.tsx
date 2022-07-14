// import { Button } from "antd";
// import { useEffect, useRef, useState } from "react";
// import useRefState from "../hooks/useRefState";

// const usePrevious: <T>(x: T) => T = (value) => {
//   const ref = useRef<typeof value>(value);
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// };

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

const Demo = () => {
  const [num, changeNum, numRef] = useRefState(1);
  const [str, changeStr] = useState("现在数字是1");
  console.log(numRef.current);
  const getNum = () => {
    const newStr = "现在数字是" + numRef.current;
    // console.log(numRef);
    changeStr(newStr);
  };

  const setNum = () => {
    // 使用 async await  自执行函数  setTimeout 都没用
    changeNum(num + 1);
    // 执行之后  getNum里拿不到最新的state
    getNum();
  };

  return (
    <div>
      <Button onClick={setNum}>点我+1</Button>
      <div>{num}</div>
      <div>{str}</div>
    </div>
  );
};

export default Demo;
