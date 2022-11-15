import React from 'react';
import { Input } from '../../components/Input';
import NoticesCategoriesNav from '../../components/Notices/NoticesCategoriesNav';
import NoticesCategoriesList from '../../components/Notices/NoticesCategoriesList';
import styles from './FindPet.module.scss';
import findpet from '../../data/findpet.json';
import { Outlet } from 'react-router-dom';

const FindPet = ({ data }, isUserLoggedIn) => {
  const onChange = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className={styles.title__findpet}>Find your favorite pet</h1>

      <Input name="findpet" type="text" placeholder="Search" customStyle={styles.input__findpet} onChange={onChange}></Input>

      <NoticesCategoriesNav />

      <Outlet />

      {/* <NoticesCategoriesList data={findpet} /> */}
    </>
  );
};

export default FindPet;
