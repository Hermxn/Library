import { createContext, ReactNode, useContext, useState } from "react";
import BookService from "../services/BookService";

const BookContext = createContext({
  booksAll: [],
  getBooksAll: () => {},
  getBooksOne: () => {},
} as unknown as {
  booksAll: string[];
  getBooksAll: () => Promise<void>;
  getBooksOne: (id: string) => Promise<void>;
});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [booksAll, setBooksAll] = useState([]);

  const getBooksAll = async () => {
    try {
      const result = await BookService.getBooksAll();
      if (result.success) {
        setBooksAll(result);
      }
    } catch (error) {
      // handle error
    }
  };

  const getBooksOne = async (id: string) => {
    try {
      const result = await BookService.getBooksOne(id);
      if (result.success) return result;
    } catch (error) {
      // handle error
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
  return useContext(BookContext);
}
