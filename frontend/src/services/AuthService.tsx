import RequestAPI from "../wrappers/RequestAPI";
import { urlsAPI } from "../utils/_urls";
import type { Interface } from "../interfaces/_index";

const AuthService = {
  login: (data: Omit<Interface.AuthData, "name">) => {
    return RequestAPI<Interface.AuthResult>({
      url: urlsAPI.login,
      method: "POST",
      data: data,
    });
  },
  signup: (data: Interface.AuthData) => {
    return RequestAPI<Interface.AuthResult>({
      url: urlsAPI.signup,
      method: "POST",
      data: data,
    });
  },
};

export default AuthService;
