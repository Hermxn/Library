import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { urlsAPP } from "../utils/_urls";
import Service from "../services/_index";
import type { Interface } from "../interfaces/_index";

type Props = { children: ReactNode };

const AuthContext = createContext<Interface.AuthContext | undefined>(undefined);

const AuthProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Service.LocalStorage.getToken();
    if (token) {
      setIsLoggedIn(true);
    } else {
      Service.LocalStorage.clearData();
    }
  }, []);

  const handleAuth: Interface.AuthHandler = {
    success: (result: Interface.AuthResult, redirect: string) => {
      setIsLoggedIn(true);
      setIsAdmin(result.user.isAdmin || false);
      Service.LocalStorage.addToken(result);
      Service.LocalStorage.addUser(result);
      navigate(redirect);
    },
    unsuccess: () => {
      setIsLoggedIn(false);
      setIsAdmin(false);
    },
    logout: () => {
      setIsLoggedIn(false);
      setIsAdmin(false);
      Service.LocalStorage.clearData();
      navigate(urlsAPP.home);
    },
  };

  const login: Interface.AuthContext["login"] = async (
    user: Omit<Interface.AuthData, "name">,
    redirect: string = urlsAPP.home
  ) => {
    const response = await Service.Auth.login(user);
    if ("error" in response) {
      handleAuth.unsuccess();
      console.error(response.error);
      //handle error
      return { error: response.error };
    }
    if ("data" in response && response.status === 200) {
      const { data } = response;
      handleAuth.success(data, redirect);
    }
  };

  const signup: Interface.AuthContext["signup"] = async (
    data: Interface.AuthData,
    redirect: string = urlsAPP.home
  ) => {
    const response = await Service.Auth.signup(data);
    if ("error" in response) {
      handleAuth.unsuccess();
      console.error(response.error);
      //handle error
      return { error: response.error };
    }
    if ("data" in response && response.status === 201) {
      const { data } = response;
      handleAuth.success(data, redirect);
    }
  };

  const logout: Interface.AuthContext["logout"] = () => {
    handleAuth.logout();
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isAdmin, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
