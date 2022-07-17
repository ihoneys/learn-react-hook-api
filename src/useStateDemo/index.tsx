import { Button } from "antd";
import { FC, useState } from "react";

const UseStateDemo: FC<{}> = () => {
  /** 声明一个叫 count 的 state 变量 */
  const [count, setCount] = useState(0); // 0作为 count 的初始值
  return (
    <div>
      <h1>useState Demo</h1>
      <h1>useMemo demo</h1>
      <div>{count}</div>

      <Button
        type="primary"
        onClick={() => {
          // 更新 state
          setCount(count + 1);
          console.log(count); // 此时 count 拿不到立即更新的值
        }}
      >
        count++
      </Button>
      <Test />
      <Test2 />
    </div>
  );
};

const Test = () => {
  const [user, setUser] = useState({ name: "honeys", age: 20 }); // 引用状态
  const onClick = () => {
    // 直接改 name 属性，此时 user 的引用地址并没有发生变化，因此点击Click 不会更新
    // react 底层 dispatchAction 会使用 === 判断旧新值是否相等来走更新逻辑
    user.name = "Lucas";
    setUser(user); // 传给setUser的这个对象和前面的是一个对象，地址是一样的

    //直接生成一个新的对象， user 应用地址发生改变，
    // setUser({
    //   ...user, // setState不会帮我们合并属性，需要用这种方式来合并属性：拷贝user的所有属性
    //   name: "Jack"
    // });
  };
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <Button onClick={onClick}>Click</Button>
    </div>
  );
};

const Test2 = () => {
  const [num, setNum] = useState(0);
  const onAdd = () => {
    setNum(num + 1); // num 不会变
    setNum(num + 1); // 在当前执行上下文中，num 还是最开始时候的值，所以再 +1 没有效果
    // setNum((num) => num + 1); // 这里 num 只是一个占位符
    // setNum((num) => num + 1); // 函数的形式，可以拿到最新的 num
  };
  return (
    <div className="App">
      <h1>num: {num}</h1>
      <button onClick={onAdd}>+2</button>
    </div>
  );
};

export default UseStateDemo;
