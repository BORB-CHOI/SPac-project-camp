import { useCountState } from "../../stores/countStore";

const UpdateCount = () => {
  const plus = useCountState((state) => state.increment);
  const minus = useCountState((state) => state.decrement);

  return (
    <>
      <button onClick={plus}>증가</button>
      <button onClick={minus}>감소</button>
    </>
  );
};
export default UpdateCount;
