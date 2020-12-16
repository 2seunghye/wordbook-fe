import React, { Component } from 'react';
import Group from './Group.js';

class GroupList extends Component {
  render() {
    const groupList = this.props.groupList;
    const groups = groupList.map((group, index) => {
      return <Group key={index} group={group} />;
    });
    return <div>{groups}</div>;
  }
}

export default GroupList;
