import RequestsAPI from "../wrappers/RequestAPI";
import { urlsAPI } from "../utils/_urls";
import type { Interface } from "../interfaces/_index";
import HandlerURL from "../handlers/HandlerURL";

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
    // replace img urls with urls in DB Supabase
    const data = HandlerURL.replaceUrl(response.data);
    //
    return data as Promise<Interface.Book[]>;
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
    // replace img urls with urls in DB Supabase
    const data = HandlerURL.replaceUrl(response.data);
    //
    return data as Promise<Interface.Book>;
  },
};

export default BookService;
