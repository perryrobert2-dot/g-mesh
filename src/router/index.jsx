import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Concepts from "../concepts/Concepts";
import News from "../news/News";
import Architecture from "../architecture/Architecture";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "concepts", element: <Concepts /> },
      { path: "news", element: <News /> },
      { path: "architecture", element: <Architecture /> },
    ],
  },
]);
