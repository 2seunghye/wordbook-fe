import WordBook from './WordBook.js';
import './UserWordBookList.css';

const UserWordBookList = (props) => {
  const userWordBookList = props.userWordBookList;

  return (
    <div className="userWordBookList">
      {userWordBookList.map((wordbook, index) => (
        <WordBook key={index} wordBook={wordbook} />
      ))}
    </div>
  );
};

export default UserWordBookList;
