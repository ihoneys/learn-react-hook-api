import {
  useState,
  useRef,
  useCallback,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";

type GetInitialStateType<T> = T extends () => infer A ? A : T;

const useRefState = <T>(
  initialState: T | (() => T)
): [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>] => {
  const ins = useRef<GetInitialStateType<typeof initialState>>();

  const [state, setState] = useState(() => {
    // 初始化
    const value =
      typeof initialState === "function"
        ? (initialState as () => T)()
        : initialState;
    ins.current = value;
    return value;
  });

  const setValue = useCallback((value) => {
    if (typeof value === "function") {
      setState((prevState) => {
        const finalValue = value(prevState);
        ins.current = finalValue;
        return finalValue;
      });
    } else {
      ins.current = value;
      setState(value);
    }
  }, []);

  return [state, setValue, ins];
};

export default useRefState;
