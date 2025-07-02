import TokenService from "./TokenService";

const LocalStorageService = {
  addToken: (data: { accessToken: string }) => {
    const { accessToken } = data;
    const expirationDate = TokenService.setExpirationDate();
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("tokenExpirationDate", expirationDate);
  },
  addUser: (data: { user: { email: string; name: string; id: string } }) => {
    const { email, name, id } = data.user;
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);
    localStorage.setItem("userId", id);
  },
  getToken: () => {
    const token = localStorage.getItem("accessToken");
    const expirationDate = localStorage.getItem("tokenExpirationDate");
    const tokenIsValid = TokenService.checkValidity(expirationDate);
    if (!token || !tokenIsValid) {
      return null;
    }
    return token;
  },
  clearData: () => {
    localStorage.clear();
  },
};

export default LocalStorageService;
