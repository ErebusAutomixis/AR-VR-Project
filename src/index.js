import * as React from "react";
import ReactDOM from "react-dom";

import Header from "./view/Header";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./view/index.css";
import "./view/Style.css";
const Array = [1, 2, 3, 4, 5, 6];
const router = createBrowserRouter([
  // {
  //   path: "/elements",
  //   element: (
  //     <>
  //       {Array.map((current) => (
  //         <Link key="Array" to={`/${current}`}>
  //           element number {current}
  //         </Link>
  //       ))}
  //     </>
  //   ),
  //   errorElement: (
  //     <>
  //       <p>error</p>

  //       <Link to="/">back</Link>
  //     </>
  //   ),
  // },
  {
    path: "/",
    element: (
      <>
        <Header />
      </>
    ),
  },
  // {
  //   path: "/elements/:elementId",
  //   element: <elements />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
