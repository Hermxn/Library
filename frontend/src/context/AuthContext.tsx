import { createContext, useState, ReactNode } from "react";
import serviceLogIn from "../services/serviceLogIn";
import serviceSignUp from "../services/serviceSignUp";

const AuthContext = createContext({
  isLoggedIn: false,
  isAdmin: false,
  login: () => {},
  Signup: () => {},
} as unknown as {
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (data: { email: string; password: string }) => Promise<void>;
  signup: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = async (data: { email: string; password: string }) => {
    try {
      const result = await serviceLogIn(data);
      if (result.success || result.accessToken) {
        // check with backend
        setIsLoggedIn(true);
        setIsAdmin(result.isAdmin || false);
        console.log(`isAdmin ${isAdmin}, isLoggedIn: ${isLoggedIn}`);
        // add token to localstorage
      }
    } catch (error) {
      setIsLoggedIn(false);
      setIsAdmin(false);
    } // add error handling
  };

  const signup = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const result = await serviceSignUp(data);
      if (result.success || result.accessToken) {
        // check with backend
        setIsLoggedIn(true);
        setIsAdmin(result.isAdmin || false);
        // add token to localstorage
      }
    } catch (error) {
      setIsLoggedIn(false);
      setIsAdmin(false);
    } // add error handling
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
