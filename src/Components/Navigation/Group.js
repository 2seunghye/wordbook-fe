import React from 'react';
import GroupWordBookList from './GroupWordBookList';
import './Group.css';

const Group = (props) => {
  const group = props.group;
  const groupName = group.groupName;
  const groupWordBookList = group.groupWordBookList;

  return (
    <div>
      <div>{groupName}</div>
      <GroupWordBookList groupName={groupName} groupWordBookList={groupWordBookList} />
    </div>
  );
};

export default Group;
