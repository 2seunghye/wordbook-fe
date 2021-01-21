import UserWordBookList from './UserWordBookList';
import GroupList from './GroupList';
import './WordBookList.css';

const WordBookList = () => {
  const wordBookList = {
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
  };

  return (
    <div className="WordBookList">
      <UserWordBookList userWordBookList={wordBookList.userWordBookList} />
      <GroupList groupList={wordBookList.groupList} />
    </div>
  );
};

export default WordBookList;
