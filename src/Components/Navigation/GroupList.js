import React from 'react';
import Group from './Group.js';
import './GroupList.css';

const GroupList = (props) => {
  const groupList = props.groupList;
  const groups = groupList.map((group, index) => {
    return <Group key={index} group={group} />;
  });
  return <div className="groups">{groups}</div>;
};

export default GroupList;
