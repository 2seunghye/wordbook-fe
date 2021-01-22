import React from 'react';
import ChoiceAns from './ChoiceAns';

const OnChoiceTest = (props) => {
  const { testWord, testIndex, handleNextWord, handleRandomIndexArray, handleClickAnswer, testWords } = props;

  return (
    <div>
      <div>{testWord.voca}</div>
      <ChoiceAns
        handleNextWord={handleNextWord}
        testWord={testWord}
        testIndex={testIndex}
        handleRandomIndexArray={handleRandomIndexArray}
        handleClickAnswer={handleClickAnswer}
        testWords={testWords}
      />
    </div>
  );
};

export default OnChoiceTest;
