import React from 'react';
import './App.css';
import WordBookPage from './routes/WordBookPage';
import WordTestPage from './routes/WordTestPage';
import Gnb from './Components/Navigation/Gnb';

import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Gnb />
      <Route path="/" exact={true} component={WordBookPage} />
      <Route path="/test" component={WordTestPage} />
    </HashRouter>
  );
}

export default App;
