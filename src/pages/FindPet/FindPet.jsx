import React from 'react';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';
import styles from './FindPet.module.scss';

const FindPet = () => {
  return (
    <div>
      Find your favourite Pet
      <NoticesSearch />
      <div className={styles.FindPet__Container}>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </div>
      <NoticesCategoriesList />
    </div>
  );
};

export default FindPet;
