import React from 'react';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';
import Container from 'components/Container';
const FindPet = () => {
  return (
    <div>
      <Container>
        Find your favourite Pet
        <NoticesSearch />
        <NoticesCategoriesNav />
        <AddNoticeButton />
        <NoticesCategoriesList />
      </Container>
    </div>
  );
};

export default FindPet;
