import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://dist.nd.ru/api",
  // responseType: "json"
});

// TODO Add interceptors for Bearer!
