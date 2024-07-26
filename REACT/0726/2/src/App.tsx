import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Write from "./pages/Write";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
};
export default App;
