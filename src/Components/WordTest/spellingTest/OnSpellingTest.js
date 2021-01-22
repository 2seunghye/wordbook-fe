import React from 'react';
import SpellingAns from './SpellingAns';

const OnSpellingTest = (props) => {
  const { testWord, testIndex, nextWord, handleCorrectAnswer, handleNextWord } = props;

  return (
    <div>
      <div>{testWord.voca}</div>
      <SpellingAns
        handleCorrectAnswer={handleCorrectAnswer}
        handleNextWord={handleNextWord}
        testWord={testWord}
        testIndex={testIndex}
        nextWord={nextWord}
      />
    </div>
  );
};

export default OnSpellingTest;
