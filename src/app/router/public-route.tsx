import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../stores";

export const PublicRoute = ({ to }: { to: string }) => {
  const user = useAuthStore((s) => !!s.user);

  return user ? <Navigate to={to} replace /> : <Outlet />;
};