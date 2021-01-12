import React from 'react';

class ChoiceTest extends React.Component {
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
      worngWords: [],
      randomIndexArray: [],
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
        // {
        //   id: 9,
        //   voca: 'melon',
        //   meaning: '멜론',
        //   isSuccess: false,
        // },
        // {
        //   id: 10,
        //   voca: 'coconut',
        //   meaning: '코코넛',
        //   isSuccess: false,
        // },
        // {
        //   id: 11,
        //   voca: 'strawberry',
        //   meaning: '딸기',
        //   isSuccess: false,
        // },
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

  componentDidMount() {
    this.setState({
      testWords: this.shuffleArray(this.state.testWords),
    });
    this.hanldeTimer();
  }

  hanldeTimer = () => {
    setInterval(() => {
      const newRunningTime = this.state.runningTime;
      if (!this.state.isFinish) {
        newRunningTime.minute += parseInt(++newRunningTime.second / 60);
        newRunningTime.second %= 60;
      }
      this.setState({
        runningTime: newRunningTime,
      });
    }, 1000);
  };

  timeFormatter = (t) => {
    if (t < 10) t = '0' + t;
    return t;
  };

  handleNextWord = () => {
    this.setState({
      testIndex: this.state.testIndex + 1,
    });
    if (this.state.testIndex === this.state.testWords.length - 1) {
      this.handleWrongAns();
      this.setState({
        isFinish: true,
      });
    }
  };

  handleRandomIndexArray = () => {
    const indexArray = this.state.randomIndexArray;
    indexArray.push(this.state.testIndex);
    for (let i = 0; indexArray.length === 4; i++) {
      const randomIndex = Math.floor(Math.random() * this.state.testWords.length);
      if (indexArray.indexOf(randomIndex) == -1) {
        indexArray.push(randomIndex);
      }
      this.setState({
        randomIndexArray: indexArray,
      });
      console.log(this.state.randomIndexArray);
    }
  };

  componentDidMount() {
    this.handleRandomIndexArray();
  }

  render() {
    // this.handleRandomIndexArray();
    const { runningTime, score, testIndex, isFinish, wrongWords, testWords, randomIndexArray } = this.state;
    const minute = this.timeFormatter(runningTime.minute);
    const second = this.timeFormatter(runningTime.second);
    return (
      <div>
        <h1>단어 테스트</h1>
        <div className="timer">{isFinish ? '' : minute + ':' + second}</div>
        <div>
          <div>{testWords[testIndex].voca}</div>
        </div>
        <div>
          <div>1. {testWords[0].meaning}</div>
          {/* 랜덤인덱스 만들어서 넣으면 됨 */}
          <div>2. {testWords[1].meaning}</div>
          <div>3. {testWords[2].meaning}</div>
          <div>4. {testWords[3].meaning}</div>
        </div>
        <div>{testIndex / testWords.length}</div>
      </div>
    );
  }
}

export default ChoiceTest;
