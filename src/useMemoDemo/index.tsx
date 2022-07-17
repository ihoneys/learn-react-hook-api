import { Button } from "antd";
import { FC, useState, useMemo } from "react";

const ParentCom: FC<{}> = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>useMemo demo</h1>
      <div>{count}</div>
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        count++
      </Button>
      {useMemo(
        () => (
          <ChildCom />
        ),
        []
      )}
      <SonCom />
    </>
  );
};

const ChildCom = () => {
  console.log("子组件更新了");
  return <div>Child子组件</div>;
};

const SonCom = () => {
  console.log("孙组件更新了");
  return <div>Son孙组件</div>;
};

export default ParentCom;
