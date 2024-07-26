import { useNavigate } from "react-router-dom";

const Home = () => {
  const navicate = useNavigate();

  return (
    <>
      <h1>Home Component</h1>
      <button onClick={() => navicate("/about")}>About</button>
    </>
  );
};
export default Home;
