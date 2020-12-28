import React from 'react';
import './Word.css';
import WordView from './WordView';
import ModifyWord from './ModifyWord';

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeenModifying: false,
    };
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
    const { word, onReviseWord } = this.props;
    const { isBeenModifying } = this.state;

    return (
      <div>
        {isBeenModifying ? (
          <ModifyWord onToggleIsBeenModifying={this.onToggleIsBeenModifying} word={word} onReviseWord={onReviseWord} />
        ) : (
          <WordView onToggleIsBeenModifying={this.onToggleIsBeenModifying} word={word} />
        )}
      </div>
    );
  }
}

export default Word;
