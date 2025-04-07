import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://dist.nd.ru/api",
});

// TODO Add interceptors for Bearer!
