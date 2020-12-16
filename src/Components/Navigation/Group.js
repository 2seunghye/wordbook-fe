import React, { Component } from 'react';
import GroupWordBookList from './GroupWordBookList';

class Group extends Component {
  render() {
    const group = this.props.group;
    const groupName = group.groupName;
    const groupWordBookList = group.groupWordBookList;

    return (
      <div>
        <div>{groupName}</div>;
        <GroupWordBookList groupName={groupName} groupWordBookList={groupWordBookList} />;
      </div>
    );
  }
}

export default Group;
