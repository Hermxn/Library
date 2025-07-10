import RequestsAPI from "../wrappers/RequestAPI";
import { urlsAPI } from "../utils/_urls";
import { IFBook } from "../interfaces/InterfaceBook";

const BookService = {
  getBooksAll: () => {
    return RequestsAPI<IFBook[]>({ url: urlsAPI.getBooksAll });
  },
  getBooksOne: (id: string) => {
    return RequestsAPI<IFBook>({ url: urlsAPI.getBooksOne(id) });
  },
};

export default BookService;
