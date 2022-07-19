import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffectDemo = () => {
  const h1El = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");

    if (h1El.current) {
      h1El.current.style.color = "#C779D0";
    }
  }, []);
  return (
    <div>
      <h1 ref={h1El}>UseLayoutEffect</h1>
    </div>
  );
};

export default UseLayoutEffectDemo;
