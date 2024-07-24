const Eat = (props: {
  uname: string;
  age: number;
  onFinishEat: () => void;
}) => {
  return (
    <>
      <h1>
        {props.uname} - {props.age} Eat Component
      </h1>
      <button onClick={props.onFinishEat}>식완</button>
    </>
  );
};
export default Eat;
