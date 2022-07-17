import { useEffect, useRef } from "react";

const usePrevious: <T>(x: T) => T = (value) => {
  const ref = useRef<typeof value>(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
