import RequestAPI from "../wrappers/RequestAPI";
import { urlsAPI } from "../utils/_urls";

const AuthService = {
  login: (data: { email: string; password: string }) => {
    return RequestAPI(urlsAPI.login, "POST", data);
  },
  signup: (data: { name: string; email: string; password: string }) => {
    return RequestAPI(urlsAPI.signup, "POST", data);
  },
};

export default AuthService;
