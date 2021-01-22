import React from 'react';
import ChoiceAns from './ChoiceAns';

const ChoiceTest = (props) => {
  const {
    testWord,
    testIndex,
    nextWord,
    handleCorrectAnswer,
    handleNextWord,
    handleRandomIndexArray,
    handleChoiceNextWord,
    handleClickAns,
    testWords,
  } = props;

  return (
    <div>
      <div>{testWord.voca}</div>
      <ChoiceAns
        handleCorrectAnswer={handleCorrectAnswer}
        handleNextWord={handleNextWord}
        testWord={testWord}
        testIndex={testIndex}
        nextWord={nextWord}
        handleRandomIndexArray={handleRandomIndexArray}
        handleChoiceNextWord={handleChoiceNextWord}
        handleClickAns={handleClickAns}
        testWords={testWords}
      />
    </div>
  );
};

export default ChoiceTest;
