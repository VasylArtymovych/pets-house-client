import React from 'react';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList';
import styles from './FindPet.module.scss';
import Container from 'components/Container';
import { Outlet } from 'react-router-dom/dist';
const FindPet = () => {
  return (
    <>
      <Container>
        <h1 className={styles.title__findpet}>Find your favorite pet</h1>
        <NoticesSearch />

        <NoticesCategoriesNav />

        <Outlet />

        {/* <NoticesCategoriesList data={findpet} /> */}
      </Container>
    </>
  );
};

export default FindPet;
