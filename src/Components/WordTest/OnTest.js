import React from 'react';
import TestAns from './TestAns';

class OnTest extends React.Component {
  render() {
    const { testWord, testIndex, nextWord, handleCorrectAnswer, handleNextWord } = this.props;
    return (
      <div>
        <div>{testWord.voca}</div>
        <TestAns
          handleCorrectAnswer={handleCorrectAnswer}
          handleNextWord={handleNextWord}
          testWord={testWord}
          testIndex={testIndex}
          nextWord={nextWord}
        />
      </div>
    );
  }
}

export default OnTest;
