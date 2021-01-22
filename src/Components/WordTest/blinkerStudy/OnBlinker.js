import React, { useState, useEffect } from 'react';

const OnBlinker = (props) => {
  const [testIndex, setTestIndex] = useState(0);
  const [speed, setSpeed] = useState(2000);
  const [isFinish, setIsFinish] = useState(false);
  const { testWords } = props;

  const changeTimer = () => {
    setTimeout(() => {
      if (testIndex !== testWords.length - 1) {
        setTestIndex(testIndex + 1);
      } else {
        setIsFinish(true);
      }
    }, speed);
  };

  useEffect(() => {
    changeTimer();
    return () => clearTimeout(changeTimer);
  });

  const handleFaster = () => {
    changeSpeed(-500);
  };

  const handleSlower = () => {
    changeSpeed(500);
  };

  const changeSpeed = (value) => {
    const min = 500;
    const max = 5000;

    const newSpeed = speed + value;
    if (newSpeed < min || newSpeed > max) return;
    setSpeed(newSpeed);
  };

  const result = props.testWords.map((word) => (
    <div>
      <span>{word.voca}</span>
      <span>{word.meaning}</span>
    </div>
  ));

  return (
    <div>
      {isFinish ? (
        <div>{result}</div>
      ) : (
        <div>
          <div>
            {speed / 1000}초
            <br />
            {testIndex + 1} / {testWords.length}
          </div>
          <div>{testWords[testIndex].voca}</div>
          <div>{testWords[testIndex].meaning}</div>
          <button onClick={handleFaster}>faster</button>
          <button onClick={handleSlower}>slower</button>
        </div>
      )}
    </div>
  );
};

export default OnBlinker;
