import React from 'react';

class WordView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleClick = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { voca, meaning, onRemoveWord, id } = this.props.word;
    const { isOpen } = this.state;
    return (
      <div>
        <div className="word-card" onClick={this.handleClick}>
          <div className="voca">
            <span>{voca}</span>
          </div>
          <div className={isOpen ? 'meaning hidden' : 'meaning'}>
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
