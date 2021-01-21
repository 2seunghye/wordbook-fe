import React, { useState } from 'react';
import './ModifyWord.css';

const ModifyWord = (props) => {
  const [word, setWord] = useState(props.word);

  const onReviseWord = props.onReviseWord;
  const onToggleIsBeenModifying = props.onToggleIsBeenModifying;

  const onChangeHandler = (e) => {
    setWord({
      [e.target.name]: e.target.value,
    });
  };

  const onModiftyHandler = () => {
    onReviseWord(word);
    onToggleIsBeenModifying();
  };

  const vocaId = 'voca';
  const vocaName = 'voca';

  const meaningId = 'meaning';
  const meaningName = 'meaning';

  return (
    <div className="ModifyWord">
      <div className="addWordForm">
        <h2>단어수정</h2>
        <label htmlFor="voca"></label>
        <input type="text" id={vocaId} name={vocaName} onChange={onChangeHandler} value={word.voca} placeholder="단어" />
        <label htmlFor="meaning"></label>
        <input type="text" id={meaningId} name={meaningName} onChange={onChangeHandler} value={word.meaning} placeholder="뜻" />
        <div>
          <button onClick={onModiftyHandler}>수정</button>
          <button onClick={onToggleIsBeenModifying}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default ModifyWord;
