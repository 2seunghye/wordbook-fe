import React from 'react';
import './App.css';
import WordBookPage from './routes/WordBookPage';
import WordTestPage from './routes/WordTestPage';
import Gnb from './Components/Navigation/Gnb';

import SpellingTest from './Components/WordTest/spellingTest/SpellingTest';
import ChoiceTest from './Components/WordTest/choiceTest/ChoiceTest';

import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Gnb />
      <HashRouter>
        <Route path="/" exact={true} component={WordBookPage} />
        <Route path="/test" exact={true} component={WordTestPage} />
        <Route path="/test/spellingTest" component={SpellingTest} />
        <Route path="/test/choiceTest" component={ChoiceTest} />
      </HashRouter>
    </HashRouter>
  );
}

export default App;
