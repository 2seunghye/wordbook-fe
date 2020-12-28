import React from 'react';
import WordBookList from './WordBookList';
import './Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }
  handleToggleHide = () => {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  };
  render() {
    return (
      <div className="navigation">
        <button onClick={this.handleToggleHide}>{this.state.isHidden ? 'Show' : 'Hide'} Nav</button>
        <div className={this.state.isHidden ? 'hidden' : ''}>
          <WordBookList />
        </div>
      </div>
    );
  }
}

export default Navigation;
