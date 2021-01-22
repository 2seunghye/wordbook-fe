import React from 'react';

class OnFlashTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  handleClickO = () => {
    this.props.handleOAns();
    this.props.handleNextWord();

    this.setState({
      isOpen: false,
    });
  };

  handleClickX = () => {
    this.props.handleNextWord();
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { testWord } = this.props;
    const { isOpen } = this.state;
    console.log(this.state.isOpen);
    return (
      <div>
        <div className="flash-card">
          <div className="test-card" onClick={this.handleClick}>
            <div className="flash-voca">
              <span>{testWord.voca}</span>
            </div>
            <div className={isOpen ? 'flash-meaning' : 'flash-meaning hidden'}>
              <span>{testWord.meaning}</span>
            </div>
          </div>
          <button onClick={this.handleClickO}>O</button>
          <button onClick={this.handleClickX}>X</button>
        </div>
      </div>
    );
  }
}

export default OnFlashTest;
