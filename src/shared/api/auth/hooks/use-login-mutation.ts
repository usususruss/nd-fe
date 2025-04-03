import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AuthDto, TokenDto } from "../../dto";
import { AuthService } from "../service";
import { AuthQueryKeys } from "./query-keys";

type Options = Omit<
  UseMutationOptions<TokenDto, Error, AuthDto>,
  "mutationFn" | "mutationKey"
>;

export const useLoginMutation = (options?: Options) =>
  useMutation({
    ...options,
    mutationKey: AuthQueryKeys.login,
    mutationFn: AuthService.login,
  });
