import React, { useState } from "react";
import C from "./C";

const A = () => {
  const [count, setCount] = useState(0);
  console.log("A Rendered");
  return (
    <>
      <h1>A Count : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <C />
    </>
  );
};
export default React.memo(A);
