import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Gnb = () => {
  let data = {
    name: 'testStudyGroup',
  };

  const createStudyGroup = () => {
    fetch(`http://180.189.90.200:8080/api/v1/users/1/study-groups`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200 || res.status === 201) {
        console.log('성공');
      } else {
        console.log('실패');
      }
    });
  };

  return (
    <div className="gnb">
      <button onClick={createStudyGroup}>버튼</button>
      <Link to="/">HOME</Link>
      <Link to="/test">TEST</Link>
    </div>
  );
};

export default Gnb;
