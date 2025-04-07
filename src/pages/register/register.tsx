import { Link, useNavigate } from "react-router-dom";
import { RegisterForm, RegisterFormData } from "./features";
import { RegDto, useRegisterMutation } from "../../shared/api";

export const Register = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useRegisterMutation();

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
