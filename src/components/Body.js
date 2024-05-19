import Br from "./Br";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Br />,
    },
  ]);

  //useeffect is used to setup the event listener for once only

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
