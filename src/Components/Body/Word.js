import React from 'react';
import './Word.css';
import WordView from './WordView';
import ModifyWord from './ModifyWord';

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.isOpen, isBeenModifying: false };
  }

  handleClick = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  onToggleIsBeenModifying = () => {
    this.setState((state) => ({
      isBeenModifying: !state.isBeenModifying,
    }));
  };

  render() {
    const { voca, meaning, onRemoveWord, id, onReviseWord } = this.props;
    const { isOpen, isBeenModifying } = this.state;

    return (
      <div>
        {isBeenModifying ? (
          <ModifyWord
            onToggleIsBeenModifying={this.onToggleIsBeenModifying}
            voca={voca}
            meaning={meaning}
            id={id}
            onReviseWord={onReviseWord}
          />
        ) : (
          <WordView onToggleIsBeenModifying={this.onToggleIsBeenModifying} voca={voca} meaning={meaning} id={id} />
        )}
      </div>
    );
  }
}

export default Word;
