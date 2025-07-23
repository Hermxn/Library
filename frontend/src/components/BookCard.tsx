import { useNavigate } from "react-router-dom";
import type { Interface } from "../interfaces/_index";
import { urlsAPP } from "../utils/_urls";
import { GoBookmark } from "react-icons/go";
import "../styles/components/BookCard.css";

interface Props {
  book: Interface.Book;
}

const BookCard = ({ book }: Props) => {
  const { image, bookName, author, id } = book;
  const navigate = useNavigate();

  const handleBookDetailsClick = (): void => {
    navigate(urlsAPP.book(id));
  };

  const handleAddToFavoriteClick = (
    event: React.MouseEvent<SVGElement>
  ): void => {
    event.stopPropagation();
    console.log("F");
  };

  return (
    <div className={`book-card ${id}`} onClick={handleBookDetailsClick}>
      <div className="book-header">
        <picture>
          <source srcSet={`${image}.webp`} type="image/webp" />
          <source srcSet={`${image}.jpg`} type="image/jpeg" />
          <img src={`${image}.jpg`} alt="Book image" />
        </picture>
      </div>
      <div className="book-footer">
        <h4>{bookName}</h4>
        <p>{author}</p>
        <GoBookmark
          className="book-footer-icon"
          onClick={handleAddToFavoriteClick}
        >
          +
        </GoBookmark>
      </div>
    </div>
  );
};

export default BookCard;
