import { createBrowserRouter, Navigate } from "react-router-dom";

import { Notes, Login, Register } from "../../pages";
import { ProtectedRoute } from "./protected-route";
import { PublicRoute } from "./public-route";

export const router = createBrowserRouter([
  {
    element: <PublicRoute to="/notes" />,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [{ path: "notes", Component: Notes }],
  },
  { path: "*", element: <Navigate to="/login" replace /> },
]);
