import React, { useState } from 'react';
import './WordView.css';

const WordView = (props) => {
  const [isOpen, setIsOpen] = useState(props.word.isOpen);
  const { voca, meaning, id } = props.word;
  const { onRemoveWord, onToggleIsBeenModifying } = props;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="WordView">
      <div className="word-card" onClick={handleClick}>
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
      <button type="button" onClick={onToggleIsBeenModifying}>
        수정버튼
      </button>
    </div>
  );
};

export default WordView;
