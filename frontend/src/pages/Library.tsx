import { useEffect, useState } from "react";
import { useBook } from "../context/BookContext";
import SearchBar from "../components/SearchBar";
import Book from "../components/BookCard";
import "../styles/pages/Library.css";

const Library = () => {
  const { booksAll, getBooksAll } = useBook();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (booksAll.length === 0) getBooksAll();
  }, [booksAll]);

  const booksFiltered = booksAll.filter((book) =>
    book.bookName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <section className="section-book-library">
        {booksFiltered.length > 0
          ? booksFiltered.map((book) => <Book key={book.id} book={book} />)
          : null}
      </section>
    </>
  );
};

export default Library;
