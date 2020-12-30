import React from 'react';

class TestAns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningInput: '',
    };
  }
  inputChange = (e) => {
    this.setState({
      meaningInput: e.target.value,
    });
  };

  submitInput = () => {
    if (this.state.meaningInput === this.props.testMeaning) {
      this.props.nextWord();
    }
    this.setState({ meaningInput: '' });
  };

  render() {
    const testMeaning = this.props.testMeaning;
    return (
      <div>
        <input
          type="text"
          id="meaningInput"
          name="meaningInput"
          placeholder="뜻"
          onChange={this.inputChange}
          value={this.state.meaningInput}
        />
        <p>{this.state.meaningInput === testMeaning ? '정답' : '오답'}</p>
        <button type="button" onClick={this.submitInput}>
          버튼
        </button>
      </div>
    );
  }
}

export default TestAns;
