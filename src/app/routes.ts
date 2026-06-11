import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { ContactPage } from "./components/ContactPage";

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
