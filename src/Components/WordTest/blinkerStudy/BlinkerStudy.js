import React from 'react';

class BlinkerStudy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: 2000,
      testIndex: 0,
      isFinish: false,
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
    this.timer = setInterval(this.changeWord, this.state.speed);
  }

  componentDidUpdate() {
    clearInterval(this.timer);
    this.timer = setInterval(this.changeWord, this.state.speed);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  changeWord = () => {
    if (this.state.testIndex !== this.state.testWords.length - 1) {
      this.setState({
        testIndex: this.state.testIndex + 1,
      });
    } else {
      clearInterval(this.timer);
    }
  };

  handleFaster = () => {
    this.changeSpeed(-500);
  };

  handleSlower = () => {
    this.changeSpeed(500);
  };

  changeSpeed = (value) => {
    const min = 500;
    const max = 5000;

    const newSpeed = this.state.speed + value;
    if (newSpeed < min || newSpeed > max) return;

    this.setState({ speed: newSpeed });
  };

  shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; --i) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    const { testWords, testIndex, speed } = this.state;
    return (
      <div>
        <div>
          {speed / 1000}초
          <br />
          {testIndex + 1} / {testWords.length}
        </div>
        <div>{testWords[testIndex].voca}</div>
        <div>{testWords[testIndex].meaning}</div>
        <button onClick={this.handleFaster}>faster</button>
        <button onClick={this.handleSlower}>slower</button>
      </div>
    );
  }
}

export default BlinkerStudy;
