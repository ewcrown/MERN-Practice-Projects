import Home from "./screens/Home";
import About from "./screens/About";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from "./screens/Login";
import Layout from "./components/Layout";
import SignUp from "./screens/Signup";

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
    {
      path: "/signup",
      element: <Layout><SignUp /></Layout>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
