import React from 'react';
import Word from './Word';
import './WordList.css';

const WordList = (props) => {
  const { wordList, onRemoveWord, onReviseWord } = props;

  return (
    <div classNam="WordList">
      {wordList.map((word, index) => (
        <Word key={index} word={word} onRemoveWord={onRemoveWord} onReviseWord={onReviseWord} />
      ))}
    </div>
  );
};

export default WordList;
