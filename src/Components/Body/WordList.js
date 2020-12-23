import React from 'react';
import Word from './Word';

class WordList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  onUpdate = () => {
    const newArr = this.props.wordList;
    this.setState({ newList: newArr });
  };

  render() {
    const { wordList, onRemoveWord } = this.props;
    return (
      <div>
        {wordList.map((word, index) => (
          <Word key={index} id={word.id} voca={word.voca} meaning={word.meaning} onRemoveWord={onRemoveWord} />
        ))}
      </div>
    );
  }
}

export default WordList;
