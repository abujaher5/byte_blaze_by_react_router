import { createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import Blog from "./pages/Blog.jsx";
// import Bookmarks from "./pages/Bookmarks.jsx";
// import MainLayout from "./layouts/MainLayout.jsx";
// import BlogDetails from "./pages/BlogDetails.jsx";
import Author from "../components/Author.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import Blog from "../pages/Blog.jsx";
import BlogDetails from "../pages/BlogDetails.jsx";
import Bookmarks from "../pages/Bookmarks.jsx";
import Home from "../pages/Home.jsx";
import Content from "../components/Content.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },

      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },

      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            // path: "/",
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },

      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);
