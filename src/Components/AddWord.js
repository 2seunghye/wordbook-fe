import React from 'react';
import './AddWord.css';

class AddWord extends React.Component {
  id = 2;

  constructor(props) {
    super(props);
    this.state = {
      newVoca: '',
      newMeaning: '',
    };
  }

  wordChangeHandler = (e) => {
    this.setState({
      newVoca: e.target.value,
    });
  };

  meaningChangeHandler = (e) => {
    this.setState({
      newMeaning: e.target.value,
    });
  };

  onCreateHandler = () => {
    const { newVoca, newMeaning, id } = this.state;
    const { onChangeWords } = this.props;
    const word = { isOpen: false, id: id, voca: newVoca, meaning: newMeaning };
    onChangeWords(word);
    this.setState({
      id: this.id++,
      newVoca: '',
      newMeaning: '',
    });
    console.log(this.id);
  };

  render() {
    const { newVoca, newMeaning } = this.state;
    return (
      <div>
        <div className="addWordForm">
          <h2>단어추가</h2>
          <label htmlFor="voca"></label>
          <input type="text" id="voca" onChange={this.wordChangeHandler} value={newVoca} placeholder="단어" />
          <label htmlFor="meaning"></label>
          <input type="text" id="meaning" onChange={this.meaningChangeHandler} value={newMeaning} placeholder="뜻" />
          <button onClick={this.onCreateHandler}>추가</button>
        </div>
      </div>
    );
  }
}

export default AddWord;
