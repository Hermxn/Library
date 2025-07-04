import RequestsAPI from "../wrappers/RequestAPI";
import { urlsAPI } from "../utils/_urls";

const BookService = {
  getBooksAll: () => {
    return RequestsAPI(urlsAPI.getBooksAll, "GET");
  },
  getBooksOne: (id: string) => {
    return RequestsAPI(urlsAPI.getBooksOne(id), "GET");
  },
};

export default BookService;
