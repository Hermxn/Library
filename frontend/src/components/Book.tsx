import { Link } from "react-router-dom";
import BookInterface from "../interfaces/BookInterface";
import { urlsAPP } from "../utils/_urls";

interface Props {
  book: BookInterface;
}

const Book = ({ book }: Props) => {
  const { image, bookName, author, id } = book;
  return (
    <div className="book-card">
      <div className="book-header">
        <img src={image}></img>
      </div>
      <div className="book-footer">
        <h3>{bookName}</h3>
        <p>{author}</p>
      </div>
      <Link to={urlsAPP.book(id)}>Details</Link>
    </div>
  );
};

export default Book;
