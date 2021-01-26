import React, { useState, useEffect } from 'react';
import OnSpellingTest from './spellingTest/OnSpellingTest';
import ResultComponent from './ResultComponent';
import OnFlashTest from './flashTest/OnFlashTest';
import OnChoiceTest from './choiceTest/OnChoiceTest';
import OnBlinker from './blinkerStudy/OnBlinker';

const TestComponents = (props) => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [wrongWords, setWrongWords] = useState([]);
  const [testIndex, setTestIndex] = useState(0);
  const [testWords, setTestWords] = useState([
    {
      id: 0,
      voca: 'apple',
      meaning: '사과',
      isSuccess: false,
    },
    {
      id: 1,
      voca: 'banana',
      meaning: '바나나',
      isSuccess: false,
    },
    {
      id: 2,
      voca: 'pineapple',
      meaning: '파인애플',
      isSuccess: false,
    },
    {
      id: 3,
      voca: 'mango',
      meaning: '망고',
      isSuccess: false,
    },
    {
      id: 4,
      voca: 'pear',
      meaning: '배',
      isSuccess: false,
    },
    {
      id: 5,
      voca: 'peach',
      meaning: '복숭아',
      isSuccess: false,
    },
    {
      id: 6,
      voca: 'avocado',
      meaning: '아보카도',
      isSuccess: false,
    },
    {
      id: 7,
      voca: 'watermelon',
      meaning: '수박',
      isSuccess: false,
    },
    {
      id: 8,
      voca: 'lemon',
      meaning: '레몬',
      isSuccess: false,
    },
    {
      id: 9,
      voca: 'melon',
      meaning: '멜론',
      isSuccess: false,
    },
    {
      id: 10,
      voca: 'coconut',
      meaning: '코코넛',
      isSuccess: false,
    },
    {
      id: 11,
      voca: 'strawberry',
      meaning: '딸기',
      isSuccess: false,
    },
  ]);

  // TestWords 셔플
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i >= 0; --i) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setTestWords(shuffleArray(testWords));
  }, [testWords]);

  // TestTimer 기능
  const TestTimer = () => {
    const timerFormatter = (t) => {
      if (t < 10) t = '0' + t;
      return t;
    };

    const handleTimer = () => {
      setTimeout(() => {
        let newMin = min;
        let newSec = sec;
        if (!isFinish) {
          newMin += parseInt(++newSec / 60);
          newSec %= 60;
        }
        setMin(newMin);
        setSec(newSec);
      }, 1000);
    };

    useEffect(() => {
      handleTimer();
      return () => clearTimeout(handleTimer);
    }, []);

    let minute = timerFormatter(min);
    let second = timerFormatter(sec);

    return <div className="timer">{props.isFinish ? '' : minute + ':' + second}</div>;
  };
  ///////////////////////////////////////////////////////

  // 객관식 시험에만 해당
  const handleClickAnswer = async (e) => {
    if (e.target.innerText === testWords[testIndex].meaning) {
      document.getElementById('details').innerHTML = '맞았습니다.';
      testWords[testIndex].isSuccess = true;
    } else {
      document.getElementById('details').innerHTML = '틀렸습니다.';
      handleWrongAns();
    }

    setTimeout(() => {
      handleNextWord();
    }, 1500);
  };

  // 주관식 시험, 플래쉬 시험 에만 해당
  const handleCorrectAnswer = (id) => {
    let newTestWords = testWords.slice();
    testWords[testIndex].isSuccess = true;
    setTestWords(newTestWords);
    setScore(score + 1);
  };

  // 모두 사용 가능
  const handleWrongAns = () => {
    const newArr = testWords.filter((word) => word.isSuccess === false);
    setWrongWords(newArr);
  };

  const handleNextWord = () => {
    setTestIndex(testIndex + 1);
    if (testIndex === testWords.length - 1) {
      handleWrongAns();
      setIsFinish(true);
    }
  };

  const spellingTest = (
    <OnSpellingTest testWord={testWords[testIndex]} handleCorrectAnswer={handleCorrectAnswer} handleNextWord={handleNextWord} />
  );

  const choiceTest = (
    <OnChoiceTest
      testWord={testWords[testIndex]}
      testIndex={testIndex}
      handleNextWord={handleNextWord}
      handleClickAnswer={handleClickAnswer}
      testWords={testWords}
    />
  );

  const flashTest = (
    <OnFlashTest handleCorrectAnswer={handleCorrectAnswer} handleNextWord={handleNextWord} testWord={testWords[testIndex]} />
  );

  const blinkerStudy = <OnBlinker testWords={testWords} />;

  const renderTestDom = () => {
    if (window.location.hash === '#/test/spellingTest') {
      return spellingTest;
    } else if (window.location.hash === '#/test/choiceTest') {
      return choiceTest;
    } else if (window.location.hash === '#/test/flashTest') {
      return flashTest;
    } else if (window.location.hash === '#/test/blinkerStudy') {
      return blinkerStudy;
    }
  };

  return (
    <div>
      <TestTimer />
      <div>
        {testIndex} / {testWords.length}
      </div>

      {isFinish && <ResultComponent score={score} wrongWords={wrongWords} min={min} sec={sec} />}
      {!isFinish && renderTestDom()}
    </div>
  );
};

export default TestComponents;
