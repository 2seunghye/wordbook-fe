import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import AddWord from '../Components/AddWord';
import WordList from '../Components/Body/WordList';

class WordBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {
          id: 0,
          voca: 'apple',
          meaning: '사과',
        },
        {
          id: 1,
          voca: 'banana',
          meaning: '바나나',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Navigation />
        <AddWord onChangeWords={this.onChangeWords} />
        <WordList wordList={this.state.words} onRemoveWord={this.onRemoveWord} />
      </div>
    );
  }

  onChangeWords = (word) => {
    const newArr = this.state.words.concat(word);
    this.setState({
      words: newArr,
    });
    console.log(this.state);
  };

  onRemoveWord = (id) => {
    const newArr = this.state.words.filter((word) => word.id !== id);
    this.setState({
      words: newArr,
    });
  };
}

export default WordBook;
