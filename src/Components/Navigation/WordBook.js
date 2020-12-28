import React from 'react';
import './WordBook.css';
import { Route, Link } from 'react-router-dom';

class WordBook extends React.Component {
  render() {
    const wordBook = this.props.wordBook;
    return (
      <div className="WordBook">
        <a href="#">{wordBook.wordBookId}</a>
      </div>
    );
  }
}

export default WordBook;
