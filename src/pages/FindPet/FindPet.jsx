import React from 'react';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';

const FindPet = () => {
  return (
    <div>
      Find your favourite Pet
      <NoticesSearch />
      <NoticesCategoriesNav />
      <AddNoticeButton />
      <NoticesCategoriesList />
    </div>
  );
};

export default FindPet;
