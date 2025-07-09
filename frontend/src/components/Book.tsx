import BookInterface from "../interfaces/BookInterface";

interface Props {
  book: BookInterface;
}

const Book = ({ book }: Props) => {
  const { image, bookName, author } = book;
  return (
    <div className="book-card">
      <div className="book-header">
        <img src={image}></img>
      </div>
      <div className="book-footer">
        <h3>{bookName}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Book;
