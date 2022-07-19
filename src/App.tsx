import { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";

import UseCallbackDemo from "./useCallbackDemo";
import UseRefDemo from "./useRefDemo";
import UseStateDemo from "./useStateDemo";
import UseReducerDemo from "./useReducerDemo";
import { Link, Route, Routes } from "react-router-dom";
import UseEffectDemo from "./useEffectDemo";
import UseContextDemo from "./useContextDemo";
import UseLayoutEffectDemo from "./useLayoutEffectDemo/ index";
import UseImperativeHandleDemo from "./useImperativeHandleDemo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/useStateDemo" element={<UseStateDemo />} />
        <Route path="/useRefDemo" element={<UseRefDemo />} />
        <Route path="/useCallbackDemo" element={<UseCallbackDemo />} />
        <Route path="/useReducerDemo" element={<UseReducerDemo />} />
        <Route path="/useEffectDemo" element={<UseEffectDemo />} />
        <Route path="/useContextDemo" element={<UseContextDemo />} />
        <Route path="/useLayoutEffectDemo" element={<UseLayoutEffectDemo />} />
        <Route
          path="/useImperativeHandleDemo"
          element={<UseImperativeHandleDemo />}
        />
      </Routes>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "32px"
        }}
      >
        <Link to="/useStateDemo">UseStateDemo</Link>
        <Link to="/useRefDemo">UseRefDemo</Link>
        <Link to="/useCallbackDemo">UseCallbackDemo</Link>
        <Link to="/useReducerDemo">UseReducerDemo</Link>
        <Link to="/useContextDemo">UseContextDemo</Link>
        <Link to="/useLayoutEffectDemo">UseLayoutEffectDemo</Link>
        <Link to="/useImperativeHandleDemo">UseImperativeHandleDemo</Link>
      </div>
    </div>
  );
}

export default App;
