import { Component } from 'react';

class OnTest extends Component {
  checkAnswer = (answerIndex) => {
    const { correctAnswerIndex, handleCorrectAnswer, handleNextWord } = this.props;
    if (correctAnswerIndex == answerIndex) handleCorrectAnswer(this.props.testWord.id);
    else handleWrongAnswer();
    handleNextWord();
  };
  render() {
    const { testWord, choiceArray } = this.props;
    return (
      <div>
        <div>{testWord.voca}</div>
        <div>
          <button onClick={this.checkAnswer(0)}>1.</button>
          <div>{choiceArray[0]}</div>
        </div>
        <div>
          <button onClick={this.checkAnswer(1)}>2.</button>
          <div>{choiceArray[1]}</div>
        </div>
        <div>
          <button onClick={this.checkAnswer(2)}>3.</button>
          <div>{choiceArray[2]}</div>
        </div>
        <div>
          <button onClick={this.checkAnswer(3)}>4.</button>
          <div>{choiceArray[3]}</div>
        </div>
      </div>
    );
  }
}

export default OnTest;
