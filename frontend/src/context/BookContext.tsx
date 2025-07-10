import { createContext, ReactNode, useContext, useState } from "react";
import BookService from "../services/BookService";
import { IFBook, IFBookContext } from "../interfaces/InterfaceBook";

type Props = { children: ReactNode };

const BookContext = createContext<IFBookContext | undefined>(undefined);

const BookProvider = ({ children }: Props) => {
  const [booksAll, setBooksAll] = useState<IFBook[]>([]);

  const getBooksAll: IFBookContext["getBooksAll"] = async () => {
    const response = await BookService.getBooksAll();
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

  const getBooksOne: IFBookContext["getBooksOne"] = async (id: string) => {
    const response = await BookService.getBooksOne(id);
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
