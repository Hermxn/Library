import type { Interface } from "../interfaces/_index";
import "../styles/BookCardDetailed.css";

interface Props {
  book: Interface.Book;
}

const BookCardDetailed = ({ book }: Props) => {
  return (
    <div className="BCD-grid">
      <div className="BCD-image">
        <img src={book.image} alt="f" width="200px" height="200px"></img>
      </div>
      <div className="BCD-description">
        <h2>{book.bookName}</h2>
        <p>{book.author}</p>
        <h3>{book.annotation}</h3>
        <p>{book.description}</p>
        <div className="BCD-description-grid">
          <div className="BCD-description-grid-left">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div className="BCD-description-grid-right">
            <p>{book.publisher}</p>
            <p>{book.genre}</p>
            <p>{book.pages}</p>
            <p>{book.year}</p>
            <p>
              {book.availableStock}/{book.fullStock} books
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardDetailed;
