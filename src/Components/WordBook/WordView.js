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
        <div className="word-container">
          <div className="voca">
            <span>{voca}</span>
          </div>
          <div className={isOpen ? 'meaning' : 'meaning hidden'}>
            <span>{meaning}</span>
          </div>
        </div>
        <div className="wordView-btn">
          <button type="button" onClick={onToggleIsBeenModifying}>
            <i class="fas fa-pencil-alt"></i>
          </button>
          <button type="button" onClick={() => onRemoveWord(id)}>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordView;
