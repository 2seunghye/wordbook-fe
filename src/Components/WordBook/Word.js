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

  onToggleIsBeenModifying = () => {
    this.setState((state) => ({
      isBeenModifying: !state.isBeenModifying,
    }));
  };

  render() {
    const { word, onReviseWord, onRemoveWord } = this.props;
    const { isBeenModifying } = this.state;

    return (
      <div className="Word">
        {isBeenModifying ? (
          <ModifyWord onToggleIsBeenModifying={this.onToggleIsBeenModifying} word={word} onReviseWord={onReviseWord} />
        ) : (
          <WordView onToggleIsBeenModifying={this.onToggleIsBeenModifying} word={word} onRemoveWord={onRemoveWord} />
        )}
      </div>
    );
  }
}

export default Word;
