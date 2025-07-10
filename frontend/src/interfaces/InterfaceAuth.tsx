export interface IFAuthData {
  email: string;
  password: string;
  name: string;
}
export interface IFAuthResult {
  accessToken: string;
  user: {
    id: number;
    email: string;
    name: string;
    isAdmin: boolean;
  };
}

export interface IFAuthContext {
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (data: Omit<IFAuthData, "name">) => Promise<void | { error: unknown }>;
  signup: (data: IFAuthData) => Promise<void | { error: unknown }>;
  logout: () => void;
}

export interface IFAuthHandler {
  success: (result: IFAuthResult, redirect: string) => void;
  unsuccess: () => void;
  logout: () => void;
}
