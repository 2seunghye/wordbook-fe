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
      {/* <button className="nav-btn" onClick={handleToggleHide}>
        {isHidden ? <i class="fas fa-chevron-left"></i> : <i class="fas fa-chevron-right"></i>}
      </button> */}
      <div className={isHidden ? 'hidden' : ''}>
        <WordBookList />
      </div>
    </div>
  );
};

export default Navigation;
