import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
import Work from "../pages/Work";
import ProjectPage from "../pages/ProjectPage";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "work/:slug", Component: ProjectPage },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
