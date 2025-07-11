import { useEffect } from "react";
import { useBook } from "../context/BookContext";
import Book from "../components/BookCard";

const Library = () => {
  const { booksAll, getBooksAll } = useBook();

  useEffect(() => {
    if (booksAll.length === 0) getBooksAll();
  }, [booksAll]);

  return (
    <div className="section-book-library">
      {booksAll.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Library;
