import React from 'react';
import TestResult from './TestResult';
import OnTest from './OnTest';

class WordTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
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
        // {
        //   id: 5,
        //   voca: 'peach',
        //   meaning: '복숭아',
        // },
        // {
        //   id: 6,
        //   voca: 'avocado',
        //   meaning: '아보카도',
        // },
        // {
        //   id: 7,
        //   voca: 'watermelon',
        //   meaning: '수박',
        // },
        // {
        //   id: 8,
        //   voca: 'lemon',
        //   meaning: '레몬',
        // },
        // {
        //   id: 9,
        //   voca: 'melon',
        //   meaning: '멜론',
        // },
        // {
        //   id: 10,
        //   voca: 'coconut',
        //   meaning: '코코넛',
        // },
        // {
        //   id: 11,
        //   voca: 'strawberry',
        //   meaning: '딸기',
        // },
      ],
    };
  }

  shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleNextWord = () => {
    this.setState({
      testIndex: this.state.testIndex + 1,
    });
    if (this.state.testIndex === this.state.testWords.length - 1) {
      this.setState({
        isFinish: true,
      });
    }
  };

  handleCorrectAnswer = (id) => {
    const { testWords } = this.state;
    const index = testWords.findIndex((word) => {
      if (word.id === id) return true;
    });
    let newTestWords = testWords.slice();
    newTestWords[index].isSuccess = true;
    this.setState({
      testWords: newTestWords,
      score: this.state.score + 1,
    });
  };

  render() {
    // this.setState({
    //   testWords: this.shuffleArray(this.props.testWords),
    // });

    const testWords = this.shuffleArray(this.state.testWords);
    const { score, testIndex, isFinish } = this.state;
    console.log(this.state.testWords);

    return (
      <div>
        <h1>단어 테스트</h1>

        <div>
          {testIndex}/{testWords.length}
        </div>
        {isFinish ? (
          <TestResult score={score} />
        ) : (
          <OnTest
            handleCorrectAnswer={this.handleCorrectAnswer}
            handleNextWord={this.handleNextWord}
            testWord={testWords[testIndex]}
            testIndex={testIndex}
          />
        )}
      </div>
    );
  }
}

export default WordTest;
