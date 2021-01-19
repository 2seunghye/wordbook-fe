import React, { useState } from 'react';
import './AddWord.css';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    if (validate(value)) {
      setValue(value);
    }
  };

  const validate = (value) => {
    if (typeof validator === 'function') {
      throw new Error('please improve your code');
    }

    return validator(value);
  };

  return { value, onChange };
};

const vocaValidator = (value) => {
  let eng = /^[a-zA-Z]*$/;
  return eng.test(value);
};
const meaningValidator = (value) => {
  let ko = /^[ㄱ-ㅎ가-힣]*$/;
  return ko.test(value);
};

const AddWord = (props) => {
  const [id, setId] = useState(2);
  const newVoca = useInput('', vocaValidator);
  const newMeaning = useInput('', meaningValidator);

  const onCreateHandler = () => {
    const word = { isOpen: false, id: id, voca: newVoca.value, meaning: newMeaning.value };
    props.onChangeWords(word);
    setId(id + 1);
  };

  return (
    <div className="addWordForm">
      <h2>단어추가</h2>
      <label htmlFor="voca"></label>
      <input type="text" id="voca" {...newVoca} placeholder="단어" />
      <label htmlFor="meaning"></label>
      <input type="text" id="meaning" {...newMeaning} placeholder="뜻" />
      <button onClick={onCreateHandler}>추가</button>
    </div>
  );
};

// class AddWord extends React.Component {
//   id = 2;

//   constructor(props) {
//     super(props);
//     this.state = {
//       newVoca: '',
//       newMeaning: '',
//     };
//   }

//   wordChangeHandler = (e) => {
//     this.setState({
//       newVoca: e.target.value,
//     });
//   };

//   meaningChangeHandler = (e) => {
//     this.setState({
//       newMeaning: e.target.value,
//     });
//   };

//   onCreateHandler = () => {
//     const { newVoca, newMeaning, id } = this.state;
//     const { onChangeWords } = this.props;
//     const word = { isOpen: false, id: id, voca: newVoca, meaning: newMeaning };
//     onChangeWords(word);
//     this.setState({
//       id: this.id++,
//       newVoca: '',
//       newMeaning: '',
//     });
//     console.log(this.id);
//   };

//   render() {
//     const { newVoca, newMeaning } = this.state;
//     return (
//       <div className="addWordForm">
//         <h2>단어추가</h2>
//         <label htmlFor="voca"></label>
//         <input type="text" id="voca" onChange={this.wordChangeHandler} value={newVoca} placeholder="단어" />
//         <label htmlFor="meaning"></label>
//         <input type="text" id="meaning" onChange={this.meaningChangeHandler} value={newMeaning} placeholder="뜻" />
//         <button onClick={this.onCreateHandler}>추가</button>
//       </div>
//     );
//   }
// }

export default AddWord;
