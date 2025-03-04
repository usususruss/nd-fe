import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

// Define the shape of the form values using Zod
const validationSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

// Define the initial values for the form
const initialValues = {
  email: "",
  password: "",
};

// Define the props for the LoginForm component
interface LoginFormProps {
  onCancel: () => void; // Callback for cancel button
  onSubmit: (values: typeof initialValues) => Promise<void>; // Callback for form submission
}

export const LoginForm: React.FC<LoginFormProps> = ({ onCancel, onSubmit }) => {
  // Initialize useFormik hook with Zod validation schema
  const formik = useFormik({
    initialValues,
    validationSchema: toFormikValidationSchema(validationSchema), // Use zod-formik-adapter here
    onSubmit, // Pass onSubmit as a reference
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Email Field */}
      <div>
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </div>

      {/* Password Field */}
      <div>
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </div>

      {/* Buttons */}
      <Button
        type="submit"
        disabled={formik.isSubmitting}
        variant="contained"
        color="primary"
        style={{ marginRight: "8px" }}
      >
        Login
      </Button>
      <Button
        type="button"
        onClick={onCancel}
        variant="outlined"
        color="secondary"
      >
        Cancel
      </Button>
    </form>
  );
};
