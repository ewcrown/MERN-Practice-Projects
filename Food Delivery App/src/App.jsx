import Home from "./screens/Home";
import About from "./screens/About";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./screens/Login";
import Layout from "./components/Layout";

function App() {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Home /></Layout>,
    },
    {
      path: "/about",
      element: <Layout><About /></Layout>,
    },
    {
      path: "/login",
      element: <Layout><Login /></Layout>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
