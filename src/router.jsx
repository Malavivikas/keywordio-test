import React from "react";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import MultiStepForm from "./components/MultiStepForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <MultiStepForm />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
