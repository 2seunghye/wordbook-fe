import React, { useState } from 'react';

const FlashAns = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { testWord, handleCorrectAnswer, handleNextWord } = props;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickO = () => {
    handleCorrectAnswer();
    handleNextWord();

    setIsOpen(false);
  };

  const handleClickX = () => {
    handleNextWord();
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <div className="test-card" onClick={handleClick}>
          <div className="flash-voca">
            <span>{testWord.voca}</span>
          </div>
          <div className={isOpen ? 'flash-meaning' : 'flash-meaning hidden'}>
            <span>{testWord.meaning}</span>
          </div>
        </div>
      </div>
      <div className="flash-card">
        <button onClick={handleClickO}>O</button>
        <button onClick={handleClickX}>X</button>
      </div>
    </div>
  );
};

export default FlashAns;
