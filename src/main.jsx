import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

// import Home from "./pages/Home.jsx";
// import Blog from "./pages/Blog.jsx";
// import Bookmarks from "./pages/Bookmarks.jsx";
// import MainLayout from "./layouts/MainLayout.jsx";
// import BlogDetails from "./pages/BlogDetails.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       { path: "/", element: <Home></Home> },

//       {
//         path: "/blog",
//         element: <Blog></Blog>,
//         loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
//       },

//       {
//         path: "/blogDetails/:id",
//         element: <BlogDetails></BlogDetails>,
//         loader: ({ params }) =>
//           fetch(`https://dev.to/api/articles/${params.id}`),
//       },

//       {
//         path: "/bookmarks",
//         element: <Bookmarks></Bookmarks>,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
