import { Component } from 'react';
import OnTest from './OnTest';
import TestResult from './TestResult';

class FlashTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runningTime: {
        minute: 0,
        second: 0,
      },
      score: 0,
      testIndex: 0,
      isFinish: false,
      wrongWords: [],
      testWords: [
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
      ],
    };
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; --i) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handletimer = () => {
    setInterval(() => {
      const newRunningTime = this.state.runningTime;
      if (!this.state.isFinish) {
        newRunningTime.minute += parseInt(++newRunningTime.second / 60);
        newRunningTime.second %= 60;
      }
      this.setState({ runningTime: newRunningTime });
    }, 1000);
  };

  timerFormatter = (t) => {
    if (t < 10) t = '0' + t;
    return t;
  };

  componentDidMount() {
    this.setState({
      testWords: this.shuffleArray(this.state.testWords),
    });
    this.handletimer();
  }
  handleNextWord = () => {
    this.setState({
      testIndex: this.state.testIndex + 1,
    });
    if (this.state.testIndex === this.state.testWords.length - 1) {
      this.makeWrongAnsList();
      this.setState({
        isFinish: true,
      });
    }
  };
  makeWrongAnsList = () => {
    const { testWords } = this.state;
    const newArr = testWords.filter((word) => word.isSuccess === false); // slice() 필요한가요?
    this.setState({
      wrongWords: newArr,
    });
  };
  handleOAns = () => {
    const { testWords, testIndex } = this.state;
    let newTestWords = testWords.slice();
    testWords[testIndex].isSuccess = true;
    this.setState({
      testWords: newTestWords,
      score: this.state.score + 1,
    });
  };

  render() {
    const { testWords, score, testIndex, isFinish, wrongWords } = this.state;
    const minute = this.timerFormatter(this.state.runningTime.minute);
    const second = this.timerFormatter(this.state.runningTime.second);
    return (
      <div>
        <h1>단어 테스트</h1>
        <div className="timer">{isFinish ? '' : minute + ':' + second}</div>
        <div>
          {testIndex}/{testWords.length}
        </div>
        {isFinish ? (
          <TestResult score={score} wrongWords={wrongWords} minute={minute} second={second} />
        ) : (
          <OnTest handleOAns={this.handleOAns} handleNextWord={this.handleNextWord} testWord={testWords[testIndex]} testIndex={testIndex} />
        )}
      </div>
    );
  }
}

export default FlashTest;
