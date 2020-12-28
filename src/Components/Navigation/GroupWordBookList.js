import React, { Component } from 'react';
import WordBook from './WordBook';
import './GroupWordBookList.css';

class GroupWordBookList extends Component {
  render() {
    const groupWordBookList = this.props.groupWordBookList;

    return (
      <div>
        {groupWordBookList.map((wordBook, index) => (
          <WordBook key={index} wordBook={wordBook} />
        ))}
      </div>
    );
  }
}

export default GroupWordBookList;
