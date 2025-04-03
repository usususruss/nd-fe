import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../entities/user";
import { RegisterForm, RegisterFormData } from "./features";
import { RegDto, useRegisterMutation } from "../../shared/api";

export const Register = () => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);

  const { mutateAsync } = useRegisterMutation();

  if (user) {
    return <Navigate to="/notes" replace />;
  }

  const onSubmit = async (props: { value: RegisterFormData }) => {
    const dto: RegDto = {
      email: props.value.email,
      password: props.value.password,
      confirm_password: props.value.confirmPassword,
    };
    try {
      const user = await mutateAsync(dto);

      console.log("new user", user);

      navigate("/login");
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <div>
      <h2>Register Page</h2>
      <RegisterForm onSubmit={onSubmit} />
      <p>
        Already has an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
