import { Component } from 'react';

class OnTest extends Component {
  render() {
    const { handleClickAns, testWords, testIndex, randomIndexArray } = this.props;

    return (
      <div>
        <div id="details"></div>
        <div>
          <div>{testWords[testIndex].voca}</div>
        </div>
        <div onClick={handleClickAns}>{testWords[randomIndexArray[0]].meaning}</div>
        <div onClick={handleClickAns}>{testWords[randomIndexArray[1]].meaning}</div>
        <div onClick={handleClickAns}>{testWords[randomIndexArray[2]].meaning}</div>
        <div onClick={handleClickAns}>{testWords[randomIndexArray[3]].meaning}</div>
        <div>{testIndex / testWords.length}</div>
      </div>
    );
  }
}

export default OnTest;
