import React from 'react';
import OnTest from '../choiceTest/OnTest';

class ChoiceTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runningTime: {
        minute: 0,
        second: 0,
      },
      isLoading: true,
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

  handleNextWord = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === this.state.testWords[this.state.testIndex].meaning) {
      document.getElementById('details').innerHTML = '맞았습니다.';
    } else {
      document.getElementById('details').innerHTML = '틀렸습니다.';
    }

    const nextWord = () => {
      this.setState({
        testIndex: this.state.testIndex + 1,
      });
      this.handleRandomIndexArray();

      if (this.state.testIndex === this.state.testWords.length - 1) {
        this.handleWrongAns();
        this.setState({
          isFinish: true,
        });
      }

      document.getElementById('details').innerHTML = '';
    };

    setTimeout(() => {
      nextWord();
    }, 1500);
  };

  handleRandomIndexArray = () => {
    const indexArray = [];
    // 1. 정답인 testIndex는 반드시 포함이 되어야 하므로 array에 push해준다.
    indexArray.push(this.state.testIndex);

    // 2. 사지선다이므로 array 길이가 4가 될 때 까지 반복
    while (indexArray.length < 4) {
      const randomIndex = Math.floor(Math.random() * this.state.testWords.length);
      // 2-1. 중복된 숫자는 넣으면 안되므로 indexOf가 -1일때만 push
      if (indexArray.indexOf(randomIndex) == -1) {
        indexArray.push(randomIndex);
      }
    }

    // 3. 배열을 섞지 않으면 정답이 무조건 1번에 오기 때문에 한 번 섞어준다
    for (let i = indexArray.length - 1; i >= 0; --i) {
      let j = Math.floor(Math.random() * (i + 1));
      [indexArray[i], indexArray[j]] = [indexArray[j], indexArray[i]];
    }

    // 4. randomIndexArray에 넣어준다
    this.setState({ randomIndexArray: indexArray });
    this.setState({ isLoading: false });
  };

  componentDidMount() {
    this.handleRandomIndexArray();
    this.hanldeTimer();
  }

  render() {
    const { runningTime, score, testIndex, isFinish, wrongWords, testWords, randomIndexArray, isLoading } = this.state;
    const minute = this.timeFormatter(runningTime.minute);
    const second = this.timeFormatter(runningTime.second);
    return (
      <div>
        {isLoading ? (
          <div>로딩중입니다...</div>
        ) : (
          <div>
            <h1>단어 테스트</h1>
            <div id="details"></div>
            <div>
              <div>{testWords[testIndex].voca}</div>
            </div>
            <div onClick={this.handleNextWord}>{testWords[randomIndexArray[0]].meaning}</div>
            <div onClick={this.handleNextWord}>{testWords[randomIndexArray[1]].meaning}</div>
            <div onClick={this.handleNextWord}>{testWords[randomIndexArray[2]].meaning}</div>
            <div onClick={this.handleNextWord}>{testWords[randomIndexArray[3]].meaning}</div>
            <div className="timer">{isFinish ? '' : minute + ':' + second}</div>

            <button onClick={this.handleNextWord}>버튼</button>
            <div>{testIndex / testWords.length}</div>
          </div>
        )}
      </div>
    );
  }
}

export default ChoiceTest;
