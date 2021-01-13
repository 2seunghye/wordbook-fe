import { Component } from 'react';

class OnTest extends Component {
  //   checkAnswer = (answerIndex) => {
  //     const { correctAnswerIndex, handleCorrectAnswer, handleNextWord } = this.props;
  //     if (correctAnswerIndex == answerIndex) handleCorrectAnswer(this.props.testWord.id);
  //     else handleWrongAnswer();
  //     handleNextWord();
  //   };
  render() {
    const { testWord, choiceArray, randomIndexArray } = this.props;
    console.log(randomIndexArray);
    return (
      <div>
        <div>1. {testWord[randomIndexArray[0]].meaning}</div>
        <div>2. {testWord[randomIndexArray[1]].meaning}</div>
        <div>3. {testWord[randomIndexArray[2]].meaning}</div>
        <div>4. {testWord[randomIndexArray[3]].meaning}</div>
      </div>
      //   <div>
      //     <div>{testWord.voca}</div>
      //     <div>
      //       <button onClick={this.checkAnswer(0)}>1.</button>
      //       <div>{choiceArray[0]}</div>
      //     </div>
      //     <div>
      //       <button onClick={this.checkAnswer(1)}>2.</button>
      //       <div>{choiceArray[1]}</div>
      //     </div>
      //     <div>
      //       <button onClick={this.checkAnswer(2)}>3.</button>
      //       <div>{choiceArray[2]}</div>
      //     </div>
      //     <div>
      //       <button onClick={this.checkAnswer(3)}>4.</button>
      //       <div>{choiceArray[3]}</div>
      //     </div>
      //   </div>
    );
  }
}

export default OnTest;
