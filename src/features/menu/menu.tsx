import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../entities/user";

export const Menu = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  if (!user) return null;

  return (
    <nav>
      <Link to="/notes">Notes</Link>
      <Button color="primary" variant="outlined" onClick={logout}>Logout</Button>
    </nav>
  );
};
