import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  { path: "/bookmarks", element: <Bookmarks></Bookmarks> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
