import { useContext } from "react";
import { CounterContext } from "../../context/countContext";

const UpdateButton = () => {
  console.log("update button");
  const { setCount } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </>
  );
};
export default UpdateButton;
