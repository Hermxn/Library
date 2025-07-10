import { createContext, ReactNode, useContext, useState } from "react";
import Service from "../services/_index";
import type { Interface } from "../interfaces/_index";

type Props = { children: ReactNode };

const BookContext = createContext<Interface.BookContext | undefined>(undefined);

const BookProvider = ({ children }: Props) => {
  const [booksAll, setBooksAll] = useState<Interface.Book[]>([]);

  const getBooksAll: Interface.BookContext["getBooksAll"] = async () => {
    const response = await Service.Book.getBooksAll();
    if ("error" in response) {
      console.error(response.error);
      //handle error
      return { error: response.error };
    }
    if (
      "data" in response &&
      response.status === 200 &&
      response.data.length !== 0
    ) {
      const { data } = response;
      setBooksAll(data);
    }
  };

  const getBooksOne: Interface.BookContext["getBooksOne"] = async (
    id: string
  ) => {
    const response = await Service.Book.getBooksOne(id);
    if ("error" in response) {
      console.error(response.error);
      // handle erro
      return { error: response.error };
    }
    if (
      "data" in response &&
      response.status === 200 &&
      response.data !== undefined
    )
      return response.data;
  };

  return (
    <BookContext.Provider value={{ booksAll, getBooksAll, getBooksOne }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;

export function useBook() {
  return useContext(BookContext);
}
