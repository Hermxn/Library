import { useEffect } from "react";
import { useBook } from "../context/BookContext";
import Book from "../components/Book";

const Library = () => {
  const { booksAll, getBooksAll } = useBook();

  useEffect(() => {
    getBooksAll();
  }, []);

  console.log(booksAll);

  return (
    <div className="section-book-library">
      {booksAll.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Library;
