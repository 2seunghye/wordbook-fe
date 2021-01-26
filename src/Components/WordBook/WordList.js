import React from 'react';
import Word from './Word';
import './WordList.css';

const WordList = (props) => {
  const { wordList, onRemoveWord, onReviseWord } = props;

  return (
    <div className="WordList">
      <p>😲 단어카드를 클릭하면 뜻을 숨길 수 있습니다!</p>
      {wordList.map((word, index) => (
        <Word key={index} word={word} onRemoveWord={onRemoveWord} onReviseWord={onReviseWord} />
      ))}
    </div>
  );
};

export default WordList;
