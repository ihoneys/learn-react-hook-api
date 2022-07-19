import React from "react";

const UserContext = React.createContext("");
const AgeContext = React.createContext(0);

/** context 消费方式一 */
const ContextComponent1 = () => {
  const userName = React.useContext(UserContext);
  const ageValue = React.useContext(AgeContext);
  return (
    <>
      <h2>
        消费方式一: 使用 <b>useContext</b>
      </h2>
      <h3>子组件消费拿到 name :{userName}</h3>
      <h3>子组件消费拿到 age :{ageValue}</h3>
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
        <AgeContext.Consumer>
          {(age) => (
            <UserContext.Consumer>
              {(name) => {
                return (
                  <div>
                    <div>子组件消费拿到 name: {name}</div>
                    <div>子组件消费拿到 age: {age}</div>
                  </div>
                );
              }}
            </UserContext.Consumer>
          )}
        </AgeContext.Consumer>
      </h3>
    </>
  );
};

const UseContextDemo = () => {
  return (
    <div>
      <h1>UseContextDemo</h1>
      <UserContext.Provider value={"honeys"}>
        <AgeContext.Provider value={18}>
          <ContextComponent1 />
          <ContextComponent2 />
        </AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default UseContextDemo;
