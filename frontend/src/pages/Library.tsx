import { useEffect } from "react";
import { useBook } from "../context/BookContext";
import Book from "../components/BookCard";
import "../styles/Library.css";

const Library = () => {
  const { booksAll, getBooksAll } = useBook();

  useEffect(() => {
    if (booksAll.length === 0) getBooksAll();
  }, [booksAll]);

  return (
    <main>
      <div className="section-book-library">
        {booksAll.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default Library;
