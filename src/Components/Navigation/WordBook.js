import React from 'react';

class WordBook extends React.Component {
  render() {
    const wordBook = this.props.wordBook;
    return (
      <div>
        <div>{wordBook.wordBookId}</div>
        <div></div>
      </div>
    );
  }
}

export default WordBook;
