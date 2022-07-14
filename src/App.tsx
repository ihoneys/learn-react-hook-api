import { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";

import UseCallbackDemo from "./useCallbackDemo";
import UseRefDemo from "./useRefDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UseCallbackDemo />
      <UseRefDemo />
    </div>
  );
}

export default App;
