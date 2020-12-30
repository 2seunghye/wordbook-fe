import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Gnb() {
  return (
    <div className="gnb">
      <Link to="/">HOME</Link>
      <Link to="/test">TEST</Link>
    </div>
  );
}

export default Gnb;
