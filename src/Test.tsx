import React, { useSyncExternalStore } from "react";
import { combineReducers, createStore } from "redux";
/* 模拟数据 */
const mockList1 = new Array(10000)
  .fill("tab1")
  .map((item, index) => item + "--" + index);
const mockList2 = new Array(10000)
  .fill("tab2")
  .map((item, index) => item + "--" + index);
const mockList3 = new Array(10000)
  .fill("tab3")
  .map((item, index) => item + "--" + index);

const tab = {
  tab1: mockList1,
  tab2: mockList2,
  tab3: mockList3,
};

const Test = () => {
  const [active, setActive] = React.useState("tab1"); //需要立即响应的任务，立即更新任务
  const [renderData, setRenderData] = React.useState(tab[active]); //不需要立即响应的任务，过渡任务
  const [isPending, startTransition] = React.useTransition();
  const handleChangeTab = (activeItem) => {
    setActive(activeItem); // 立即更新
    startTransition(() => {
      // startTransition 里面的任务优先级低
      setRenderData(tab[activeItem]);
    });
  };
  return (
    <div>
      'test'
      {/* <Test1 /> */}
      {/* <Test2 /> */}
      <div>
        <div className="tab">
          {Object.keys(tab).map((item) => (
            <span
              className={active === item && "active"}
              onClick={() => handleChangeTab(item)}
            >
              {item}
            </span>
          ))}
        </div>
        <ul className="content">
          {isPending && <div> loading... </div>}
          {renderData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Test2 = () => {
  const u = undefined;
  const n = null;
  const s = "";
  const b = false;
  const z = 0;
  console.log(u ?? "undefined");
  console.log(n ?? "null");
  console.log(s ?? "空字符串");
  console.log(b ?? "false");
  console.log(z ?? "0");
  return <div>||</div>;
};

const Test1 = () => {
  const u = undefined;
  const n = null;
  const s = "";
  const b = false;
  const z = 0;
  console.log(u || "undefined");
  console.log(n || "null");
  console.log(s || "空字符串");
  console.log(b || "false");
  console.log(z || "0");
  return <div>'test1'</div>;
};

export default Test;
