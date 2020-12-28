import React from 'react';

class ModifyWord extends React.Component {
  constructor(props) {
    super(props);
    // word { id, voca, meaning }
    this.state = this.props.word;
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onModiftyHandler = () => {
    const { onReviseWord, onToggleIsBeenModifying } = this.props;

    onReviseWord(this.state);
    onToggleIsBeenModifying();
  };

  render() {
    const { voca, meaning } = this.state;

    const vocaId = 'voca';
    const vocaName = 'voca';

    const meaningId = 'meaning';
    const meaningName = 'meaning';

    return (
      <div>
        <div className="addWordForm">
          <h2>단어수정</h2>
          <label htmlFor="voca"></label>
          <input type="text" id={vocaId} name={vocaName} onChange={this.onChangeHandler} value={voca} placeholder="단어" />
          <label htmlFor="meaning"></label>
          <input type="text" id={meaningId} name={meaningName} onChange={this.onChangeHandler} value={meaning} placeholder="뜻" />
          <div>
            <button onClick={this.onModiftyHandler}>수정</button>
            <button onClick={this.props.onToggleIsBeenModifying}>취소</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModifyWord;
