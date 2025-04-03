import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AuthService } from "../service";
import { AuthQueryKeys } from "./query-keys";
import { AxiosResponse } from "axios";

type Options = Omit<
  UseMutationOptions<AxiosResponse<void>, Error>,
  "mutationFn" | "mutationKey"
>;

// TODO Clear all cache on queryClient?
export const useLogoutMutation = (options?: Options) =>
  useMutation({
    ...options,
    mutationKey: AuthQueryKeys.logout,
    mutationFn: AuthService.logout,
  });
