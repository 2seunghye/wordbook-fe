import React from 'react';
import TestAns from './TestAns';

class WordTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testIndex: 0,
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
        },
        // {
        //   id: 3,
        //   voca: 'mango',
        //   meaning: '망고',
        // },
        // {
        //   id: 4,
        //   voca: 'pear',
        //   meaning: '배',
        // },
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

  nextWord = () => {
    if (this.state.testIndex === this.state.testWords.length - 1) {
      console.log('test 완료');
      return;
    }

    this.setState((prevState) => ({ testIndex: prevState.testIndex + 1 }));
  };

  render() {
    const testWords = this.state.testWords;
    const testVoca = testWords[this.state.testIndex].voca;
    const testMeaning = testWords[this.state.testIndex].meaning;

    return (
      <div>
        <h1>단어 테스트</h1>
        <h2>{testVoca}</h2>
        <TestAns testMeaning={testMeaning} nextWord={this.nextWord} />
      </div>
    );
  }
}

export default WordTest;
