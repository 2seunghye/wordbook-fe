import React from 'react';

class TestAns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningInput: '',
      enteredWrongAnswer: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      meaningInput: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') this.handleSubmit();
  };

  handleSubmit = () => {
    if (this.state.meaningInput === this.props.testWord.meaning) {
      this.setState({ meaningInput: '', enteredWrongAnswer: false });
      this.props.handleCorrectAnswer(this.props.testWord.id);
      this.props.handleNextWord();
    } else {
      this.setState({ enteredWrongAnswer: true });
    }
  };

  handlePass = () => {
    this.setState({
      enteredWrongAnswer: false,
    });
    this.props.handleNextWord();
  };

  render() {
    const testMeaning = this.props;
    return (
      <div>
        <input
          type="text"
          id="meaningInput"
          name="meaningInput"
          placeholder="뜻"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          value={this.state.meaningInput}
        />
        <button type="button" onClick={this.handleSubmit}>
          제출
        </button>
        <button type="button" onClick={this.handlePass}>
          넘어가기
        </button>
        <div>{this.state.enteredWrongAnswer ? '틀렸습니다. 다시 입력하세요' : ''}</div>
      </div>
    );
  }
}

export default TestAns;
