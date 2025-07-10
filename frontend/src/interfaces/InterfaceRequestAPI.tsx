export interface IFRequestAPIParams {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: Record<string, any>;
  token?: string | null;
}

export type IFRequestAPIResult<T> =
  | { data: T; status: number }
  | { error: unknown };
