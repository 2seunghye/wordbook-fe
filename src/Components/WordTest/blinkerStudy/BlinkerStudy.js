import React from 'react';

class BlinkerStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testIndex: 0,
      isFinish: false,
      speed: [3000, 2000, 1000],
      speedIndex: 0,
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
  componentDidMount() {
    this.setState({
      testWords: this.shuffleArray(this.state.testWords),
    });
    this.handleTimer();
  }
  handleTimer = () => {
    const { isFinish, testIndex, speed, speedIndex, testWords } = this.state;
    setInterval(() => {
      if (!isFinish) {
        this.setState({
          testIndex: testIndex + 1,
        });
      }
      console.log(isFinish);
    }, speed[speedIndex]);
    if (testIndex === testWords.length - 1) {
      this.setState({
        isFinish: true,
      });
    }
  };

  shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; --i) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleFaster = () => {
    const { speedIndex } = this.state;
    if (speedIndex < 2) {
      this.setState({
        speedIndex: speedIndex + 1,
      });
    }
  };
  handleSlower = () => {
    const { speedIndex } = this.state;
    if (speedIndex > 0) {
      this.setState({
        speedIndex: speedIndex - 1,
      });
    }
  };

  render() {
    console.log(this.state);
    const { testWords, testIndex } = this.state;
    return (
      <div>
        <div>{testWords[testIndex].voca}</div>
        <button onClick={this.handleFaster}>faster</button>
        <button onClick={this.handleSlower}>slower</button>
      </div>
    );
  }
}

export default BlinkerStudy;
