import RequestsAPI from "../wrappers/RequestAPI";
import { urlsAPI } from "../utils/_urls";
import type { Interface } from "../interfaces/_index";

const BookService = {
  getBooksAll: async (): Promise<Interface.Book[]> => {
    const response = await RequestsAPI<Interface.Book[]>({
      url: urlsAPI.getBooksAll,
    });
    if ("error" in response) {
      //handle error
      throw new Error(String(response.error));
    }
    if (response.status !== 200 || response.data.length === 0) {
      // handle error
      throw new Error("Error occured during loading the books");
    }
    return response.data;
  },

  getBooksOne: async (id: string): Promise<Interface.Book> => {
    const response = await RequestsAPI<Interface.Book>({
      url: urlsAPI.getBooksOne(id),
    });
    if ("error" in response) {
      //handle error
      throw new Error(String(response.error));
    }
    if (response.status !== 200 || response.data === undefined) {
      // handle error
      throw new Error("Error occured during loading the book");
    }
    return response.data;
  },
};

export default BookService;
