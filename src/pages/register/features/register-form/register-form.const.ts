import { z } from "zod";

export const schema = z
  .object({
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(4, "Password must be at least 4 characters")
      .nonempty("Password is required"),
    confirmPassword: z
      .string()
      .min(4, "Password must be at least 4 characters")
      .nonempty("Confirm password is required"),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Must match password",
      });
    }
  });

export const formStyles: React.CSSProperties = {
  width: 350,
  margin: "0 auto",
};
