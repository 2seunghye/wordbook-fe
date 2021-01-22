import React from 'react';
import FlashAns from './FlashAns';

const OnFlashTest = (props) => {
  const { testWord, handleCorrectAnswer, handleNextWord } = props;

  return (
    <div>
      <FlashAns handleCorrectAnswer={handleCorrectAnswer} handleNextWord={handleNextWord} testWord={testWord} />
    </div>
  );
};

export default OnFlashTest;
