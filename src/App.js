import React from 'react';
import './App.css';
import WordBookPage from './View/WordBookPage';
// import InputSample from './Components/Navigation/test';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <WordBookPage />
      </div>
    );
  }
}

// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   render() {
//     return (
//       <div className="App">
//         <InputSample />
//       </div>
//     );
//   }
// }

export default App;
