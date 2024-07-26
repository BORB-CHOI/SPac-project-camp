import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Write from "./pages/Write";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);

export default router;
