import React from 'react';
import './Word.css';

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.isOpen };
  }

  handleClick = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { voca, meaning, onRemoveWord, id } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <div className="word-card" onClick={this.handleClick}>
          <div className="voca">
            <span>{voca}</span>
          </div>
          <div className={isOpen ? 'meaning' : 'meaning hidden'}>
            <span>{meaning}</span>
          </div>
        </div>
        <button type="button" onClick={() => onRemoveWord(id)}>
          삭제버튼
        </button>
      </div>
    );
  }
}

export default Word;
