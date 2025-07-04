import { useEffect } from "react";
import { useBook } from "../context/BookContext";

const Library = () => {
  const { booksAll, getBooksAll } = useBook();

  useEffect(() => {
    getBooksAll();
  }, []);

  return (
    <div>
      {booksAll.map((book, id) => (
        <div key={id}>{JSON.stringify(book)}</div>
      ))}
    </div>
  );
};

export default Library;
