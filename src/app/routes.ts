import { createBrowserRouter } from "react-router";

// 1. Step up one level (../), then into components/layout/
import { Layout } from "../components/layout/Layout";

// 2. Step up one level (../), then into pages/
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ContactPage } from "../pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "login", Component: LoginPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);