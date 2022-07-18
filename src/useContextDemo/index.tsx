import React from "react";

const UserContext = React.createContext("");

/** context 消费方式一 */
const ContextComponent1 = () => {
  const userName = React.useContext(UserContext);
  return (
    <>
      <h2>
        消费方式一: 使用 <b>useContext</b>
      </h2>
      <h3>子组件消费拿到 name :{userName}</h3>
    </>
  );
};

/** context 消费方式二 */

const ContextComponent2 = () => {
  return (
    <>
      <h2>
        消费方式二: 使用组件 <b>ContextValue.Consumer</b>
      </h2>
      <h3>
        <UserContext.Consumer>
          {(contextValue) => {
            return <div>子组件消费拿到 name: {contextValue}</div>;
          }}
        </UserContext.Consumer>
      </h3>
    </>
  );
};

const UseContextDemo = () => {
  return (
    <div>
      <h1>UseContextDemo</h1>
      <UserContext.Provider value={"honeys"}>
        <ContextComponent1 />
        <ContextComponent2 />
      </UserContext.Provider>
    </div>
  );
};

export default UseContextDemo;
