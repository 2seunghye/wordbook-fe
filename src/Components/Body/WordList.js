import React from 'react';
import Word from './Word';

class WordList extends React.Component {
  constructor(props) {
    super(props);
  }

  onUpdate = () => {
    const newArr = this.props.wordList;
    this.setState({ newList: newArr });
  };

  render() {
    const { wordList, onRemoveWord, onReviseWord } = this.props;
    return (
      <div>
        {wordList.map((word, index) => (
          <Word key={index} word={word} onRemoveWord={onRemoveWord} onReviseWord={onReviseWord} />
        ))}
      </div>
    );
  }
}

export default WordList;
