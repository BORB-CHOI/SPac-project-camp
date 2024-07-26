import { createContext, useState } from "react";

export const CountContext = createContext<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}>({ count: 0, setCount: () => {} });

export const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        {children}
      </CountContext.Provider>
    </>
  );
};

export default CountContext;
