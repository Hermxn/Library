import { supabase } from "./HandlerDB";
import type { Interface } from "../interfaces/_index";

const HandlerURL = {
  getUrl: async (bookURL: string): Promise<string> => {
    const { data } = supabase.storage.from("img").getPublicUrl(bookURL);
    return data.publicUrl;
  },
  replaceUrl: async (
    books: Interface.Book[] | Interface.Book
  ): Promise<Interface.Book[] | Interface.Book> => {
    if (Array.isArray(books)) {
      const booksUpdated = await Promise.all(
        books.map(async (book) => {
          const urlUpdated = await HandlerURL.getUrl(book.image);
          return { ...book, image: urlUpdated };
        })
      );
      return booksUpdated;
    } else {
      books.image = await HandlerURL.getUrl(books.image);
      return books;
    }
  },
};

export default HandlerURL;
