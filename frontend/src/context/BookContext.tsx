import { createContext, ReactNode, useContext, useState } from "react";
import Service from "../services/_index";
import type { Interface } from "../interfaces/_index";

type Props = { children: ReactNode };

const BookContext = createContext<Interface.BookContext | undefined>(undefined);

const BookProvider = ({ children }: Props) => {
  const [booksAll, setBooksAll] = useState<Interface.Book[]>([]);

  const getBooksAll: Interface.BookContext["getBooksAll"] = async () => {
    try {
      const books = await Service.Book.getBooksAll();
      setBooksAll(books);
    } catch (error) {
      // handle error
      console.error(error);
    }
  };

  const getBooksOne: Interface.BookContext["getBooksOne"] = async (
    id: string
  ) => {
    try {
      const book = await Service.Book.getBooksOne(id);
      return book;
    } catch (error) {
      //handle error
      console.error(error);
    }
  };

  return (
    <BookContext.Provider value={{ booksAll, getBooksAll, getBooksOne }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;

export function useBook() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("Context must be within Provider");
  }
  return context;
}
