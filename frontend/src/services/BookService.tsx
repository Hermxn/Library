import FetchAPI from "../wrappers/FetchAPI";
import { urlsAPI } from "../utils/_urls";

const BookService = {
  getBooksAll: () => {
    return FetchAPI(urlsAPI.getBooksAll, "GET");
  },
  getBooksOne: (id: string) => {
    return FetchAPI(urlsAPI.getBooksOne(id), "GET");
  },
};

export default BookService;
