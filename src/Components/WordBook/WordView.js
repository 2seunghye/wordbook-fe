import React from 'react';
import './WordView.css';

class WordView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.word.isOpen };
  }

  handleClick = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { voca, meaning, id } = this.props.word;
    const { onRemoveWord } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="WordView">
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
        <button type="button" onClick={this.props.onToggleIsBeenModifying}>
          수정버튼
        </button>
      </div>
    );
  }
}

export default WordView;
