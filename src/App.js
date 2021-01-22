import React from 'react';
import './App.css';
import WordBookPage from './routes/WordBookPage';
import WordTestPage from './routes/WordTestPage';
import Gnb from './Components/Navigation/Gnb';

import { HashRouter, Route } from 'react-router-dom';
import TestComponents from './Components/WordTest/TestComponents';

const App = () => {
  return (
    <HashRouter>
      <Gnb />
      <Route path="/" exact={true} component={WordBookPage} />
      <Route path="/test" exact={true} component={WordTestPage} />
      <Route path="/test/spellingTest" component={TestComponents} />
      <Route path="/test/choiceTest" component={TestComponents} />
      <Route path="/test/flashTest" component={TestComponents} />
      <Route path="/test/blinkerStudy" component={TestComponents} />
    </HashRouter>
  );
};

export default App;
