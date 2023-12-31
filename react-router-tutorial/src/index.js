import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./pages/Root";
import About from "./pages/About";
import Home from "./pages/Home";
import ErrorNotFound from "./pages/ErrorNotFound";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Greeting from "./pages/Greeting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorNotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/greet/:name", element: <Greeting /> },
    ],
  },
  // { path: "/about", element: <About />, errorElement: <ErrorNotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
