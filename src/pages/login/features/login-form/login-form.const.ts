import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .nonempty("Password is required"),
});

export const formStyles: React.CSSProperties = {
  width: 350,
  margin: "0 auto",
};