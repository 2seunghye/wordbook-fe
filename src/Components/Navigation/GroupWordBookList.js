import React from 'react';
import WordBook from './WordBook';
import './GroupWordBookList.css';

const GroupWordBookList = (props) => {
  const groupWordBookList = props.groupWordBookList;

  return (
    <div>
      {groupWordBookList.map((wordBook, index) => (
        <WordBook key={index} wordBook={wordBook} />
      ))}
    </div>
  );
};

export default GroupWordBookList;
