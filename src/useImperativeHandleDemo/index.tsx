import { Button } from "antd";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef
} from "react";

interface RefProps {
  getValue(): string;
}

const Children: ForwardRefRenderFunction<RefProps> = (props, forwardRef) => {
  useImperativeHandle(
    forwardRef,
    () => ({
      getValue: () => "从子组件暴露方法"
    }),
    []
  );
  return <div>Children</div>;
};

const ForwardChildren = forwardRef(Children);

const UseImperativeHandleDemo = () => {
  const childrenEl = useRef<RefProps>(null);

  const onButtonClick = () => {
    console.log(childrenEl.current?.getValue()); // ===> '从子组件暴露方法'
  };
  return (
    <div>
      <h1>UseImperativeHandleDemo</h1>
      <ForwardChildren ref={childrenEl} />
      <Button onClick={onButtonClick}>子组件实例方法拿值</Button>
    </div>
  );
};

export default UseImperativeHandleDemo;
