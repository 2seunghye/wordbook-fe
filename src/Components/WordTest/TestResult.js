import { Component } from 'react';

class TestResult extends Component {
  render() {
    const { score } = this.props;
    return (
      <div>
        <div>점수: {score}</div>
      </div>
    );
  }
}

export default TestResult;
