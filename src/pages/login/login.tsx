import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../entities/user";
import { Button } from "@mui/material";
import { LoginForm } from "./features";

export const Login = () => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((s) => s.login);

  if (user) {
    return <Navigate to="/notes" replace />;
  }

  const handleLogin = () => {
    const fakeUserData = { id: "1", name: "John Doe" };
    login(fakeUserData);
    navigate("/notes");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm
        onCancel={function (): void {
          console.log("onCancel");          
        }}
        onSubmit={async function (values: {
          email: string;
          password: string;
        }): Promise<void> {
          console.log("onSubmit", values);
          return undefined   
        }}
      />
      <Button color="primary" variant="contained" onClick={handleLogin}>
        Log In
      </Button>
      <p>
        Has no account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};
