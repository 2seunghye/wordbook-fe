import React from 'react';
import './WordBook.css';

class WordBook extends React.Component {
  render() {
    const wordBook = this.props.wordBook;
    return (
      <div className="WordBook">
        <div>{wordBook.wordBookId}</div>
      </div>
    );
  }
}

export default WordBook;
