import './WordBook.css';

const WordBook = (props) => {
  const wordBook = props.wordBook;

  return (
    <div className="WordBook">
      <div>{wordBook.wordBookId}</div>
    </div>
  );
};

export default WordBook;
