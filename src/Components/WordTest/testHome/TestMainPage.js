import React from 'react';
import { Link } from 'react-router-dom';

class TestMainPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/test/spellingTest">주관식 시험</Link>
        <Link to="/test/choiceTest">객관식 시험</Link>
      </div>
    );
  }
}

export default TestMainPage;
