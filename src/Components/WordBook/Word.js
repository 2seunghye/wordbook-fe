import React, { useState } from 'react';
import './Word.css';
import WordView from './WordView';
import ModifyWord from './ModifyWord';

const Word = (props) => {
  const [isBeenModifying, setIsBeenModifying] = useState(false);

  const onToggleIsBeenModifying = () => {
    setIsBeenModifying(!isBeenModifying);
  };

  const word = props.word;
  const onReviseWord = props.onReviseWord;
  const onRemoveWord = props.onRemoveWord;

  return (
    <div className="Word">
      {isBeenModifying ? (
        <ModifyWord onToggleIsBeenModifying={onToggleIsBeenModifying} word={word} onReviseWord={onReviseWord} />
      ) : (
        <WordView onToggleIsBeenModifying={onToggleIsBeenModifying} word={word} onRemoveWord={onRemoveWord} />
      )}
    </div>
  );
};

export default Word;
