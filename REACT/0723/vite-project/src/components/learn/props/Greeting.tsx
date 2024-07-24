import { TNameAndAge } from "../../../type";

const Greeting = ({ uname, age }: TNameAndAge) => {
  return <h1>Hello, {uname}</h1>;
};

export default Greeting;
