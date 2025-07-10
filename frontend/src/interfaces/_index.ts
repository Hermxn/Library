import type {
  IFAuthData,
  IFAuthResult,
  IFAuthContext,
  IFAuthHandler,
} from "./InterfaceAuth";
import type { IFBook, IFBookContext } from "./InterfaceBook";
import type {
  IFRequestAPIParams,
  IFRequestAPIResult,
} from "./InterfaceRequestAPI";
import type NavbarButtonsConfig from "./InterfaceButtonsNavbar";

export namespace Interface {
  export type AuthData = IFAuthData;
  export type AuthResult = IFAuthResult;
  export type AuthContext = IFAuthContext;
  export type AuthHandler = IFAuthHandler;
  export type Book = IFBook;
  export type BookContext = IFBookContext;
  export type RequestAPIParams = IFRequestAPIParams;
  export type RequestAPIResult<T> = IFRequestAPIResult<T>;
  export type NavbarButton = NavbarButtonsConfig;
}
