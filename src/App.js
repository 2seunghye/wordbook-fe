import React from 'react';
import './App.css';
import WordBookPage from './View/WordBookPage';
import Test from './routes/Test';
import Gnb from './Components/Navigation/Gnb';

import { HashRouter, Route } from 'react-router-dom';

// import InputSample from './Components/Navigation/test';

function App() {
  return (
    <HashRouter>
      <Gnb />
      <Route path="/" exact={true} component={WordBookPage} />
      <Route path="/test" component={Test} />
    </HashRouter>
  );
}

export default App;
