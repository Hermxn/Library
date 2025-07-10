import AuthService from "./AuthService";
import BookService from "./BookService";
import LocalStorageService from "./LocalStorageService";
import TokenService from "./TokenService";

const Service = {
  Auth: AuthService,
  Book: BookService,
  LocalStorage: LocalStorageService,
  Token: TokenService,
};

export default Service;
