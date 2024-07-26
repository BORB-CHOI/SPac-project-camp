import { useEffect, useState } from "react";

const A = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count 변경됨");
  }, [count]);

  useEffect(() => {
    console.log("A 컴포넌트 생성");

    const interval = setInterval(() => {
      console.log("A Interver");
    }, 1000);

    return () => {
      console.log("A 컴포넌트 소멸");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>A Component : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </>
  );
};
export default A;
