import React from 'react';
import SpellingAns from './SpellingAns';

const OnSpellingTest = (props) => {
  const { testWord, handleCorrectAnswer, handleNextWord } = props;

  return (
    <div>
      <div>{testWord.voca}</div>
      <SpellingAns handleCorrectAnswer={handleCorrectAnswer} handleNextWord={handleNextWord} testWord={testWord} />
    </div>
  );
};

export default OnSpellingTest;
