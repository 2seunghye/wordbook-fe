import React from 'react';

class ModifyWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      newVoca: this.props.voca,
      newMeaning: this.props.meaning,
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onCreateHandler = () => {
    const { newVoca, newMeaning, id } = this.state;
    const { onReviseWord, onToggleIsBeenModifying } = this.props;
    const word = { id: id, voca: newVoca, meaning: newMeaning };
    onReviseWord(word);
    onToggleIsBeenModifying();
  };

  render() {
    const { newVoca, newMeaning } = this.state;
    const { onReviseWord } = this.props;
    return (
      <div>
        <div className="addWordForm">
          <h2>단어수정</h2>
          <label htmlFor="voca"></label>
          <input type="text" id="voca" name="newVoca" onChange={this.onChangeHandler} value={newVoca} placeholder="단어" />
          <label htmlFor="meaning"></label>
          <input type="text" id="meaning" name="newMeaning" onChange={this.onChangeHandler} value={newMeaning} placeholder="뜻" />
          <button onClick={this.onCreateHandler}>수정</button>
          <button onClick={this.props.onToggleIsBeenModifying}>취소</button>
        </div>
      </div>
    );
  }
}

export default ModifyWord;
