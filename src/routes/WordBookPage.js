import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import AddWord from '../Components/AddWord';
import WordList from '../Components/WordBook/WordList';
import './WordBookPage.css';

class WordBookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {
          isOpen: false,
          id: 0,
          voca: 'apple',
          meaning: '사과',
        },
        {
          isOpen: false,
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
        <header>
          <h1>단어장</h1>
        </header>
        <nav>
          <Navigation />
        </nav>
        <div className="wordBook-container">
          <AddWord onChangeWords={this.onChangeWords} />
          <WordList onReviseWord={this.onReviseWord} wordList={this.state.words} onRemoveWord={this.onRemoveWord} />
        </div>
      </div>
    );
  }

  onReviseWord = (newWord) => {
    const newWords = this.state.words.map((word) => {
      return word.id === newWord.id ? newWord : word;
    });

    this.setState({
      words: newWords,
    });
  };

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

export default WordBookPage;