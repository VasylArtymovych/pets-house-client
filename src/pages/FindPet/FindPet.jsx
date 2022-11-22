import React, { useEffect, useState } from 'react';
import NoticesSearch from 'components/Notices/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
import AddNoticeButton from 'components/Notices/AddNoticeButton';
import styles from './FindPet.module.scss';
import Container from 'components/Container';
import { Outlet } from 'react-router-dom/dist';
import { useTranslation } from 'react-i18next';
import { useGetNoticeByWordQuery } from 'redux/fetchNotice';

const FindPet = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const { data, refetch } = useGetNoticeByWordQuery(value, { skip: !value });
  console.log(data);

  const petsByWord = data !== undefined ? data.notices : null;
  console.log(petsByWord);

  useEffect(() => {
    if (!value) {
      return;
    }
    refetch();
  }, [refetch, value]);

  const onSubmit = (query) => {
    setValue(query);
  };
  return (
    <>
      <Container>
        <h1 className={styles.title__findpet}>{t('Find your favorite pet')}</h1>
        <NoticesSearch onSubmit={onSubmit} />

        <div className={styles.navContainer__findpet}>
          <NoticesCategoriesNav />
          <AddNoticeButton />
        </div>

        <Outlet context={[petsByWord]} />

        {/* <NoticesCategoriesList data={findPet} /> */}
      </Container>
    </>
  );
};

export default FindPet;
