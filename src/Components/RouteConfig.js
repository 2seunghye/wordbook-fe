import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import WordBookPage from '../routes/WordBookPage';
import WordBookPage from '../routes/WordTestPage';
import SpellingTest from './WordTest/spellingTest/SpellingTest';
import ChoiceTest from './WordTest/choiceTest/ChoiceTest';

function RouteConfig() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={WordBookPage} />
      <Route path="/test" component={WordTestPage} />
      <Route path="/test/spellingTest" exact={true} component={SpellingTest} />
      <Route path="/test/choiceTest" component={ChoiceTest} />
    </HashRouter>
  );
}

export default RouteConfig;
