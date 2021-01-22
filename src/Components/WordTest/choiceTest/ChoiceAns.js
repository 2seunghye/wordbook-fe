import React, { useEffect, useState } from 'react';

const ChoiceAns = (props) => {
  const [randomIndexArray, setRandomIndexArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { testWord, testIndex, handleNextWord, testWords, handleClickAnswer } = props;

  const handleRandomIndexArray = () => {
    const indexArray = [];
    indexArray.push(testIndex);

    while (indexArray.length < 4) {
      const randomIndex = Math.floor(Math.random() * testWords.length);
      if (indexArray.indexOf(randomIndex) === -1) {
        indexArray.push(randomIndex);
      }
    }

    for (let i = indexArray.length - 1; i >= 0; --i) {
      let j = Math.floor(Math.random() * (i + 1));
      [indexArray[i], indexArray[j]] = [indexArray[j], indexArray[i]];
    }

    setRandomIndexArray(indexArray);
    setIsLoading(false);
  };

  useEffect(() => {
    handleRandomIndexArray();
  }, [testWord]);

  return (
    <div>
      {isLoading ? (
        '로딩중...'
      ) : (
        <div>
          <div id="details"></div>
          <div onClick={handleClickAnswer}>{testWords[randomIndexArray[0]].meaning}</div>
          <div onClick={handleClickAnswer}>{testWords[randomIndexArray[1]].meaning}</div>
          <div onClick={handleClickAnswer}>{testWords[randomIndexArray[2]].meaning}</div>
          <div onClick={handleClickAnswer}>{testWords[randomIndexArray[3]].meaning}</div>
          <button onClick={handleNextWord}>넘어가기</button>
        </div>
      )}
    </div>
  );
};

export default ChoiceAns;
