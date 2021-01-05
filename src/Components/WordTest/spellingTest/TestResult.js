import { Component } from 'react';

class TestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  refreshPage = () => {
    window.location.reload(false);
  };

  handletoggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleShowButton = () => {
    this.handletoggle();
  };

  render() {
    const { score, minute, second } = this.props;
    const wrongWords = this.props.wrongWords.map((word) => (
      <div>
        <span>{word.voca}</span>
        <span>{word.meaning}</span>
      </div>
    ));

    return (
      <div>
        <div>점수: {score}</div>
        <div>
          걸린시간: {minute}분{second}초
        </div>
        <button onClick={this.handleShowButton}>틀린문제 {this.state.isOpen ? '닫기' : '보기'}</button>
        <button onClick={this.refreshPage}>돌아가기</button>
        <div id="wrongWords" className={this.state.isOpen ? '' : 'hidden'}>
          {wrongWords}
        </div>
      </div>
    );
  }
}

export default TestResult;
