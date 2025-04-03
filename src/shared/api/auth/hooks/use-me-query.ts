import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AuthQueryKeys } from "./query-keys";
import { AuthService } from "../service";
import { User } from "../../dto";

type Options = Omit<UseQueryOptions<User, Error>, "queryFn" | "queryKey">;

export const useMeQuery = (options?: Options) =>
  useQuery({
    ...options,
    queryKey: AuthQueryKeys.me,
    queryFn: AuthService.me,
  });
