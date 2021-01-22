import React, { useState } from 'react';

const SpellingAns = (props) => {
  const [meaningInput, setMeaningInput] = useState('');
  const [enteredWrongAnswer, setEnteredWrongAnswer] = useState(false);
  const { testWord, handleCorrectAnswer, handleNextWord } = props;

  const handleChange = (e) => {
    setMeaningInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const handleSubmit = () => {
    if (meaningInput === testWord.meaning) {
      setMeaningInput('');
      handleCorrectAnswer(testWord.id);
      handleNextWord();
    } else {
      setEnteredWrongAnswer(true);
    }
  };

  const handlePass = () => {
    setMeaningInput('');
    setEnteredWrongAnswer(false);
    handleNextWord();
  };

  return (
    <div>
      <input
        type="text"
        id="meaningInput"
        name="meaningInput"
        placeholder="뜻"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={meaningInput}
      />
      <button type="button" onClick={handleSubmit}>
        제출
      </button>
      <button type="button" onClick={handlePass}>
        넘어가기
      </button>
      <div>{enteredWrongAnswer ? '틀렸습니다. 다시 입력하세요' : ''}</div>
    </div>
  );
};

export default SpellingAns;
