import React, { useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import AddWord from '../Components/AddWord';
import WordList from '../Components/WordBook/WordList';
import './WordBookPage.css';

const WordBookPage = () => {
  const [words, setWords] = useState([
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
  ]);

  const onReviseWord = (newWord) => {
    const newWords = words.map((word) => {
      return word.id === newWord.id ? newWord : word;
    });
    setWords(newWords);
  };

  const onChangeWords = (word) => {
    const newArr = words.concat(word);
    setWords(newArr);
  };

  const onRemoveWord = (id) => {
    const newArr = words.filter((word) => word.id !== id);
    setWords(newArr);
  };

  return (
    <div>
      <header>
        <h1>단어장</h1>
      </header>
      <nav>
        <Navigation />
      </nav>
      <div className="wordBook-container">
        <AddWord onChangeWords={onChangeWords} />
        <WordList onReviseWord={onReviseWord} wordList={words} onRemoveWord={onRemoveWord} />
      </div>
    </div>
  );
};

export default WordBookPage;
