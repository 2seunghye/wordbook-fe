import React, { useState } from 'react';
import WordBookList from './WordBookList';
import './Navigation.css';

const Navigation = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleToggleHide = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="navigation">
      <button onClick={handleToggleHide}>{isHidden ? 'Show' : 'Hide'} Nav</button>
      <div className={isHidden ? 'hidden' : ''}>
        <WordBookList />
      </div>
    </div>
  );
};

export default Navigation;
