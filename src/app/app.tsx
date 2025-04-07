import { RouterProvider } from "react-router-dom";

import { Providers } from "./providers";
import { router } from "./router";

import "./app.css";

export const App = () => (
  <Providers>
    <RouterProvider router={router} />
  </Providers>
);
