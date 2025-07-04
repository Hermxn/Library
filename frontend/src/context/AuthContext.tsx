import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { urlsAPP } from "../utils/_urls";
import AuthService from "../services/AuthService";
import LocalStorageService from "../services/LocalStorageService";

const AuthContext = createContext({
  isLoggedIn: false,
  isAdmin: false,
  login: () => {},
  signup: () => {},
  logout: () => {},
} as unknown as {
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (data: { email: string; password: string }) => Promise<void>;
  signup: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = LocalStorageService.getToken();
    if (token) {
      setIsLoggedIn(true);
    } else {
      LocalStorageService.clearData();
    }
  }, []);

  const handleAuth = {
    success: (result: any, redirect: string) => {
      setIsLoggedIn(true);
      setIsAdmin(result.isAdmin || false);
      LocalStorageService.addToken(result);
      LocalStorageService.addUser(result);
      navigate(redirect);
    },
    unsuccess: () => {
      setIsLoggedIn(false);
      setIsAdmin(false);
    },
    logout: () => {
      setIsLoggedIn(false);
      setIsAdmin(false);
      LocalStorageService.clearData();
      navigate(urlsAPP.home);
    },
  };

  const login = async (
    data: { email: string; password: string },
    redirect: string = urlsAPP.home
  ) => {
    try {
      const { response, status } = await AuthService.login(data);
      if (status === 200 && response.accessToken) {
        handleAuth.success(response, redirect);
      }
    } catch (error) {
      handleAuth.unsuccess();
    } // add error handling
  };

  const signup = async (
    data: {
      name: string;
      email: string;
      password: string;
    },
    redirect: string = urlsAPP.home
  ) => {
    try {
      const { response, status } = await AuthService.login(data);
      if (status === 200 && response.accessToken) {
        handleAuth.success(response, redirect);
      }
    } catch (error) {
      handleAuth.unsuccess();
    } // add error handling
  };

  const logout = () => {
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
