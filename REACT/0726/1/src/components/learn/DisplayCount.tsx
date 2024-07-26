import { useCountState } from "../../stores/countStore";

const DisplayCount = () => {
  const count = useCountState((state) => state.count);
  return (
    <>
      <h1>count: {count}</h1>
    </>
  );
};
export default DisplayCount;
