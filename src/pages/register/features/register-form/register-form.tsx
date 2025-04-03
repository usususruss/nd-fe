import { Button, TextField } from "@mui/material";
import { useForm } from "@tanstack/react-form";

import { formStyles, schema } from "./register-form.const";
import { RegisterFormData } from "./register-form.types";

type Props = {
  onSubmit: (props: { value: RegisterFormData }) => Promise<unknown>;
};

export const RegisterForm = ({ onSubmit }: Props) => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    } as RegisterFormData,
    validators: { onSubmit: schema },
    onSubmit,
  });

  return (
    <form
      style={formStyles}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field name="email">
        {(field) => (
          <TextField
            fullWidth
            autoFocus
            name="email"
            autoComplete="email"
            variant="outlined"
            margin="normal"
            label="Email"
            defaultValue={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            error={Boolean(field.state.meta.errors.length)}
            helperText={field.state.meta.errors[0]?.message}
          />
        )}
      </form.Field>

      <form.Field name="password">
        {(field) => (
          <TextField
            fullWidth
            type="password"
            variant="outlined"
            margin="normal"
            label="Password"
            defaultValue={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            error={Boolean(field.state.meta.errors.length)}
            helperText={field.state.meta.errors[0]?.message}
          />
        )}
      </form.Field>

      <form.Field name="confirmPassword">
        {(field) => (
          <TextField
            fullWidth
            type="password"
            autoComplete="new-password"
            variant="outlined"
            margin="normal"
            label="Confirm password"
            defaultValue={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            error={Boolean(field.state.meta.errors.length)}
            helperText={field.state.meta.errors[0]?.message}
          />
        )}
      </form.Field>

      <form.Subscribe selector={(state) => state.isSubmitting}>
        {(isSubmitting) => (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Register
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
};
