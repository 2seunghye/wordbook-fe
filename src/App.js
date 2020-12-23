import React from 'react';
import './App.css';
import WordBook from './View/WordBookPage';
// import InputSample from './Components/Navigation/test';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <h1>단어장</h1>
        <WordBook />
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
