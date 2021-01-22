import React, { useState, useEffect } from 'react';

const ResultComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handletoggle = () => {
    setIsOpen(!isOpen);
  };

  const handleShowButton = () => {
    handletoggle();
  };

  const { score, min, sec } = props;
  const wrongWords = props.wrongWords.map((word) => (
    <div>
      <span>{word.voca}</span>
      <span>{word.meaning}</span>
    </div>
  ));

  return (
    <div>
      <div>점수: {score}</div>
      <div>
        걸린시간: {min}분{sec}초
      </div>
      <button onClick={handleShowButton}>틀린문제 {isOpen ? '닫기' : '보기'}</button>
      <button onClick={refreshPage}>돌아가기</button>
      <div id="wrongWords" className={isOpen ? '' : 'hidden'}>
        {wrongWords}
      </div>
    </div>
  );
};

export default ResultComponent;
