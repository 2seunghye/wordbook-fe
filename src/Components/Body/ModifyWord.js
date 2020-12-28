import React from 'react';

class ModifyWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voca: this.props.word.voca,
      meaning: this.props.word.meaning,
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onModiftyHandler = () => {
    const { onReviseWord, onToggleIsBeenModifying } = this.props;

    const { word } = this.props;
    word.voca = this.state.voca;
    word.meaning = this.state.meaning;

    onReviseWord(word);
    onToggleIsBeenModifying();
  };

  render() {
    const { voca, meaning } = this.state;

    return (
      <div>
        <div className="addWordForm">
          <h2>단어수정</h2>
          <label htmlFor="voca"></label>
          <input type="text" id="voca" name="voca" onChange={this.onChangeHandler} value={voca} placeholder="단어" />
          <label htmlFor="meaning"></label>
          <input type="text" id="meaning" name="meaning" onChange={this.onChangeHandler} value={meaning} placeholder="뜻" />
          <button onClick={this.onModiftyHandler}>수정</button>
          <button onClick={this.props.onToggleIsBeenModifying}>취소</button>
        </div>
      </div>
    );
  }
}

export default ModifyWord;
