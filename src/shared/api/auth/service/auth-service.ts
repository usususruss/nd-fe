import { axiosClient } from "../../axios";
import { AuthDto, RegDto, TokenDto, User } from "../../dto";

export const login = ({ email, password }: AuthDto) =>
  axiosClient.post<TokenDto>("/auth", { email, password }).then((r) => r.data);

export const logout = () => axiosClient.delete<void>("/auth");

export const me = () => axiosClient.get<User>("/auth").then((r) => r.data);

export const register = ({ email, password, confirm_password }: RegDto) =>
  axiosClient
    .post<User>("/reg", { email, password, confirm_password })
    .then((r) => r.data);
