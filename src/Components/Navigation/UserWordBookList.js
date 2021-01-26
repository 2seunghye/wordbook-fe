import WordBook from './WordBook.js';
import './UserWordBookList.css';

const UserWordBookList = (props) => {
  const userWordBookList = props.userWordBookList;

  return (
    <div className="userWordBookList">
      <h5>내 단어장</h5>
      {userWordBookList.map((wordbook, index) => (
        <WordBook key={index} wordBook={wordbook} />
      ))}
      <hr />
    </div>
  );
};

export default UserWordBookList;
