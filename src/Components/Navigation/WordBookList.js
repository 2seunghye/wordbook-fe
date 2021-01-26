import UserWordBookList from './UserWordBookList';
import GroupList from './GroupList';
import './WordBookList.css';

const WordBookList = () => {
  const wordBookList = {
    userWordBookList: [
      {
        wordBookId: '해커스 토익기초 11',
      },
      {
        wordBookId: '해커스 토익기초 12',
      },
      {
        wordBookId: '능률보카 Day29',
      },
    ],
    groupList: [
      {
        groupName: '토익 스터디(그룹)',
        groupWordBookList: [
          {
            wordBookId: '스터디 Day1',
          },
          {
            wordBookId: '스터디 Day2',
          },
          {
            wordBookId: '스터디 Day3',
          },
          {
            wordBookId: '스터디 Day4',
          },
        ],
      },
      {
        groupName: '학교 스터디',
        groupWordBookList: [
          {
            wordBookId: '단어시험 1주차',
          },
          {
            wordBookId: '단어시험 2주차',
          },
          {
            wordBookId: '단어시험 3주차',
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
