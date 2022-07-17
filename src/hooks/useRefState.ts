import {
  useState,
  useRef,
  useCallback,
  Dispatch,
  SetStateAction,
  MutableRefObject
} from "react";

const useRefState = <T>(
  initialState: T | (() => T)
): [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>] => {
  const ref = useRef<T>();

  const [state, setState] = useState(() => {
    // 初始化
    const value =
      typeof initialState === "function"
        ? (initialState as () => T)()
        : initialState;
    ref.current = value;
    return value;
  });

  const setValue = useCallback((value: any) => {
    if (typeof value === "function") {
      setState((prevState) => {
        const finalValue = value(prevState);
        ref.current = finalValue;
        return finalValue;
      });
    } else {
      ref.current = value;
      setState(value);
    }
  }, []);

  return [state, setValue, ref];
};

export default useRefState;
