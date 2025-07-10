import axios, { AxiosRequestConfig } from "axios";
import {
  IFRequestAPIParams,
  IFRequestAPIResult,
} from "../interfaces/InterfaceRequestAPI";

const instance = axios.create();

const RequestAPI = async <T,>({
  url,
  method = "GET",
  data = {},
  token = null,
}: IFRequestAPIParams): Promise<IFRequestAPIResult<T>> => {
  const config: AxiosRequestConfig = {
    url,
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers!["Authorization"] = `Bearer ${token}`;
  }

  if (method === "GET") {
    config.params = data;
  } else config.data = data;

  try {
    const response = await instance.request(config);
    return response;
  } catch (error) {
    return { error };
  }
};

export default RequestAPI;
