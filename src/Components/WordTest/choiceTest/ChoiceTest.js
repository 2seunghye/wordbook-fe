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
      testWords: [],
    };
  }

  componentDidMount() {
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

  render() {
    const { runningTime, score, testIndex, isFinish, wrongWords, testWords } = this.state;
    const minute = this.timeFormatter(runningTime.minute);
    const second = this.timeFormatter(runningTime.second);
    return (
      <div>
        <h1>단어 테스트</h1>
        <div className="timer">{isFinish ? '' : minute + ':' + second}</div>
        <div>{testIndex / testWords.length}</div>
      </div>
    );
  }
}

export default ChoiceTest;
