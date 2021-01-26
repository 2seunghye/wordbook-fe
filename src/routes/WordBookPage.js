import React, { useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import AddWord from '../Components/AddWord';
import WordList from '../Components/WordBook/WordList';
import './WordBookPage.css';

const WordBookPage = () => {
  const [words, setWords] = useState([
    {
      isOpen: true,
      id: 0,
      voca: 'apple',
      meaning: '사과',
    },
    {
      isOpen: true,
      id: 1,
      voca: 'banana',
      meaning: '바나나',
    },
    {
      id: 2,
      voca: 'pineapple',
      meaning: '파인애플',
      isOpen: true,
    },
    {
      id: 3,
      voca: 'mango',
      meaning: '망고',
      isOpen: true,
    },
    {
      id: 4,
      voca: 'pear',
      meaning: '배',
      isOpen: true,
    },
    {
      id: 5,
      voca: 'peach',
      meaning: '복숭아',
      isOpen: true,
    },
    {
      id: 6,
      voca: 'avocado',
      meaning: '아보카도',
      isOpen: true,
    },
    {
      id: 7,
      voca: 'watermelon',
      meaning: '수박',
      isOpen: true,
    },
    {
      id: 8,
      voca: 'lemon',
      meaning: '레몬',
      isOpen: true,
    },
    {
      id: 9,
      voca: 'melon',
      meaning: '멜론',
      isOpen: true,
    },
    {
      id: 10,
      voca: 'coconut',
      meaning: '코코넛',
      isOpen: true,
    },
    {
      id: 11,
      voca: 'strawberry',
      meaning: '딸기',
      isOpen: true,
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
    <div className="wordBookPage">
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <div className="wordBook-container">
        <div className="create-newWordBook"></div>
        <AddWord onChangeWords={onChangeWords} />
        <WordList onReviseWord={onReviseWord} wordList={words} onRemoveWord={onRemoveWord} />
      </div>
    </div>
  );
};

export default WordBookPage;
