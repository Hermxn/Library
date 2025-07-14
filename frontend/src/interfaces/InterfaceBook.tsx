export interface IFBook {
  id: string;
  bookName: string;
  author: string;
  annotation: string;
  description: string;
  publisher: string;
  genre: string;
  pages: string;
  year: string;
  availableStock: string;
  fullStock: string;
  image: string;
}

export interface IFBookContext {
  booksAll: IFBook[];
  getBooksAll: () => Promise<void>;
  getBooksOne: (id: string) => Promise<IFBook | undefined>;
}
