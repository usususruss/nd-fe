import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { RegDto, User } from "../../dto";
import { AuthService } from "../service";
import { AuthQueryKeys } from "./query-keys";

type Options = Omit<
  UseMutationOptions<User, Error, RegDto>,
  "mutationFn" | "mutationKey"
>;

export const useRegisterMutation = (options?: Options) =>
  useMutation({
    ...options,
    mutationKey: AuthQueryKeys.register,
    mutationFn: AuthService.register,
  });
