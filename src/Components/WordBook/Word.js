import React, { useState } from 'react';
import './Word.css';
import WordView from './WordView';
import ModifyWord from './ModifyWord';

const Word = (props) => {
  const [isBeenModifying, setIsBeenModifying] = useState(false);

  const onToggleIsBeenModifying = () => {
    setIsBeenModifying(!isBeenModifying);
  };

  const { word, onReviseWord, onRemoveWord } = props;

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
