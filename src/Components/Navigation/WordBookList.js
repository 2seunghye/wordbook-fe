import React from 'react';
import UserWordBookList from './UserWordBookList';
import GroupList from './GroupList';

class WordBookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordBookList: {
        userWordBookList: [
          {
            wordBookId: '단어장1',
          },
          {
            wordBookId: '단어장2',
          },
          {
            wordBookId: '단어장3',
          },
        ],
        groupList: [
          {
            groupName: 'Group1',
            groupWordBookList: [
              {
                wordBookId: '그룹단어장1',
              },
              {
                wordBookId: '그룹단어장2',
              },
              {
                wordBookId: '그룹단어장3',
              },
            ],
          },
          {
            groupName: 'Group2',
            groupWordBookList: [
              {
                wordBookId: '그룹단어장1',
              },
              {
                wordBookId: '그룹단어장2',
              },
              {
                wordBookId: '그룹단어장3',
              },
            ],
          },
          {
            groupName: 'Group3',
            groupWordBookList: [
              {
                wordBookId: '그룹단어장1',
              },
              {
                wordBookId: '그룹단어장2',
              },
              {
                wordBookId: '그룹단어장3',
              },
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <UserWordBookList userWordBookList={this.state.wordBookList.userWordBookList} />
        <GroupList groupList={this.state.wordBookList.groupList} />
      </div>
    );
  }
}

export default WordBookList;
