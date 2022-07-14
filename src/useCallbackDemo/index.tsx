import { Button } from "antd";
import React, { FC, useCallback, useEffect, useState } from "react";

interface ChildrenProps {
  getInfo(value: string): void;
}

const Children: FC<ChildrenProps> = React.memo((props) => {
  console.log("Children");

  useEffect(() => {
    props.getInfo("我是子组件");
  }, []);

  return <div>Children</div>;
});

const UseCallbackDemo: FC<{ id?: number }> = ({ id }) => {
  const [number, setNumber] = useState(0);

  const getInfo = useCallback(
    (sonName: string) => {
      console.log(sonName);
    },
    [id]
  );

  return (
    <div>
      <h1>UseCallbackDemo</h1>
      <Button type="primary" onClick={() => setNumber((num) => num + 1)}>
        增加
      </Button>
      <Children getInfo={getInfo} />
    </div>
  );
};

export default UseCallbackDemo;
