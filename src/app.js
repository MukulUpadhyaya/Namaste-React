import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { About } from "./components/About";
import {Error} from "./components/Error";
import {RestaurantMenu} from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Shimmer } from "./components/Shimmer";

const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {


  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
           <Contact/>
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error/>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
