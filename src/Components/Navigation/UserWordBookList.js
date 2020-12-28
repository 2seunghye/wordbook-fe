import { Component } from 'react';
import WordBook from './WordBook.js';
import './UserWordBookList.css';

class UserWordBookList extends Component {
  render() {
    const userWordBookList = this.props.userWordBookList;
    return (
      <div className="userWordBookList">
        {userWordBookList.map((wordbook, index) => (
          <WordBook key={index} wordBook={wordbook} />
        ))}
      </div>
    );
  }
}

export default UserWordBookList;
