import React from 'react';
import GroupWordBookList from './GroupWordBookList';
import './Group.css';

const Group = (props) => {
  const group = props.group;
  const groupName = group.groupName;
  const groupWordBookList = group.groupWordBookList;

  return (
    <div>
      <h5 className="groupName">{groupName}</h5>
      <GroupWordBookList groupName={groupName} groupWordBookList={groupWordBookList} />
    </div>
  );
};

export default Group;
