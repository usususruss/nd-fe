import { Button } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../entities/user";

export const Register = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  if (user) {
    return <Navigate to="/notes" replace />;
  }

  const handleRegister = () => {
    navigate("/notes");
  };

  return (
    <div>
      <h2>Register Page</h2>
      <Button color="primary" variant="contained" onClick={handleRegister}>
        Register
      </Button>
      <p>
        Already has an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
