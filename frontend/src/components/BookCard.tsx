import { useNavigate } from "react-router-dom";
import { IFBook } from "../interfaces/InterfaceBook";
import { urlsAPP } from "../utils/_urls";

interface Props {
  book: IFBook;
}

const Book = ({ book }: Props) => {
  const { image, bookName, author, id } = book;
  const navigate = useNavigate();

  const handleBookDetailsClick = (): void => {
    navigate(urlsAPP.book(id));
  };

  const handleAddToFavoriteClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
  };

  return (
    <div className="book-card" onClick={handleBookDetailsClick}>
      <div className="book-header">
        <img src={image}></img>
      </div>
      <div className="book-footer">
        <h3>{bookName}</h3>
        <p>{author}</p>
      </div>
      <button onClick={handleAddToFavoriteClick}>To favorites</button>
    </div>
  );
};

export default Book;
