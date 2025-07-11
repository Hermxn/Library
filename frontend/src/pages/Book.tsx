import Book from "../components/BookCard";
import { useParams } from "react-router-dom";
import { useBook } from "../context/BookContext";
import { useEffect, useState } from "react";

const BookOne = () => {
  const { id } = useParams<{ id: string }>();
  const { booksAll, getBooksOne } = useBook();
  const [book, setBook] = useState(() =>
    booksAll.find((book) => book.id === id)
  );

  useEffect(() => {
    if (!book && id) {
      getBooksOne(id).then((response) => {
        if (response) {
          setBook(response);
        }
      });
    }
  }, [id, book, getBooksOne]);

  return (
    <div className="section-book-detailed">
      {book ? <Book book={book} /> : <div>Loading...</div>}
    </div>
  );
};

export default BookOne;
