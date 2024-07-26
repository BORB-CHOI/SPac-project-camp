import { useContext } from "react";
import { CounterContext } from "../../context/countContext";

const DisplayCounter = () => {
  console.log("display counter");
  const { count } = useContext(CounterContext);
  return (
    <>
      <h1>Counter : {count}</h1>
    </>
  );
};
export default DisplayCounter;
