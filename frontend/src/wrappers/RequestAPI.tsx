import axios from "axios";
import { AxiosRequestConfig } from "axios";

const instance = axios.create();

async function RequestAPI(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
  data: Record<string, any> = {},
  token: string | null = null
) {
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
    return response.data;
  } catch (error) {
    return { error };
  }
}

export default RequestAPI;
