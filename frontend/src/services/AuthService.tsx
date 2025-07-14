import RequestAPI from "../wrappers/RequestAPI";
import { urlsAPI } from "../utils/_urls";
import type { Interface } from "../interfaces/_index";

const AuthService = {
  login: async (data: Omit<Interface.AuthData, "name">) => {
    const response = await RequestAPI<Interface.AuthResult>({
      url: urlsAPI.login,
      method: "POST",
      data: data,
    });
    if ("error" in response) {
      throw new Error(String(response.error));
    }
    if (response.status !== 200) {
      throw new Error("Error occured during login");
    }
    return response.data;
  },

  signup: async (data: Interface.AuthData) => {
    const response = await RequestAPI<Interface.AuthResult>({
      url: urlsAPI.signup,
      method: "POST",
      data: data,
    });
    if ("error" in response) {
      throw new Error(String(response.error));
    }
    if (response.status !== 201) {
      throw new Error("Error occured during signup");
    }
    return response.data;
  },
};

export default AuthService;
