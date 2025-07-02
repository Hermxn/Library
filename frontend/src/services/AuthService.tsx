import FetchAPI from "../wrappers/FetchAPI";
import { urlsAPI } from "../utils/_urls";

const AuthService = {
  login: (data: { email: string; password: string }) => {
    return FetchAPI(urlsAPI.login, "POST", data);
  },
  signup: (data: { name: string; email: string; password: string }) => {
    return FetchAPI(urlsAPI.signup, "POST", data);
  },
};

export default AuthService;
