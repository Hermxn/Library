import RequestsAPI from "../wrappers/RequestAPI";
import { urlsAPI } from "../utils/_urls";
import type { Interface } from "../interfaces/_index";

const BookService = {
  getBooksAll: () => {
    return RequestsAPI<Interface.Book[]>({ url: urlsAPI.getBooksAll });
  },
  getBooksOne: (id: string) => {
    return RequestsAPI<Interface.Book>({ url: urlsAPI.getBooksOne(id) });
  },
};

export default BookService;
