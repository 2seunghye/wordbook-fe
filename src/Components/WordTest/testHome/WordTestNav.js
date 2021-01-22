import React from 'react';
import { Link } from 'react-router-dom';

const WordTestNav = () => {
  return (
    <div>
      <Link to="/test/spellingTest">주관식 시험</Link>
      <Link to="/test/choiceTest">객관식 시험</Link>
      <Link to="/test/flashTest">플래시 시험</Link>
      <Link to="/test/blinkerStudy">깜빡이 암기</Link>
    </div>
  );
};

export default WordTestNav;
