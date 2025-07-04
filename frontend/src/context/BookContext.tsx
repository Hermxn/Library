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
      const { response, status } = await BookService.getBooksAll();
      if (status === 200 && response.length !== 0) {
        setBooksAll(response);
      }
    } catch (error) {
      // handle error
    }
  };

  const getBooksOne = async (id: string) => {
    try {
      const { response, status } = await BookService.getBooksOne(id);
      if (status === 200 && response.length !== 0) return response;
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
