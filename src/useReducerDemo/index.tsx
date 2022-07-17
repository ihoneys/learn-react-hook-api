import { Button } from "antd";
import { FC, useReducer } from "react";

interface State {
  value: number;
}

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "incrementAmount"; amount: number };

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    case "incrementAmount":
      return { value: state.value + action.amount };
    default:
      return state;
  }
};
const UseReducerDemo: FC<{}> = () => {
  const [state, dispatch] = useReducer(counterReducer, { value: 0 });
  return (
    <div>
      <h1>UseReducerDemo</h1>
      <h2>计算值：{state.value}</h2>
      <Button onClick={() => dispatch({ type: "increment" })}>增加+1</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>减少-1</Button>
      <Button onClick={() => dispatch({ type: "incrementAmount", amount: 66 })}>
        增加金额
      </Button>
    </div>
  );
};

export default UseReducerDemo;
