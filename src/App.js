import React from 'react';
import './App.css';
import WordBookPage from './routes/WordBookPage';
import WordTestPage from './routes/WordTestPage';
import Gnb from './Components/Navigation/Gnb';

import SpellingTest from './Components/WordTest/spellingTest/SpellingTest';
import ChoiceTest from './Components/WordTest/choiceTest/ChoiceTest';
import FlashTest from './Components/WordTest/flashTest/FlashTest';
import BlinkerStudy from './Components/WordTest/blinkerStudy/BlinkerStudy';

import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Gnb />
      <Route path="/" exact={true} component={WordBookPage} />
      <Route path="/test" exact={true} component={WordTestPage} />
      <Route path="/test/spellingTest" component={SpellingTest} />
      <Route path="/test/choiceTest" component={ChoiceTest} />
      <Route path="/test/flashTest" component={FlashTest} />
      <Route path="/test/blinkerStudy" component={BlinkerStudy} />
    </HashRouter>
  );
}

export default App;
