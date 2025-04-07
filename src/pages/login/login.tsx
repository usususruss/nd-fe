import { Link, useNavigate } from "react-router-dom";

import { LoginForm, LoginFormData } from "./features";
import { useLoginMutation } from "../../shared/api";

export const Login = () => {
  const navigate = useNavigate();

  // const login = useAuthStore((s) => s.login);

  const { mutateAsync } = useLoginMutation();

  const onSubmit = async ({ value }: { value: LoginFormData }) => {
    try {
      const { accessToken } = await mutateAsync(value);

      console.log("accessToken", accessToken);

      // login(value);
      navigate("/notes");
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onSubmit={onSubmit} />
      <p>
        Has no account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};
