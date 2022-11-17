import { useLocation } from 'react-router-dom';
import React from 'react';
import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import styles from './NoticesCategoriesList.module.scss';
import { useGetNoticeQuery } from 'redux/fetchNotice';

const NoticesCategoriesList = () => {
  const { pathname } = useLocation();

  const renderCategory = () => {
    switch (pathname) {
      case '/notices/sell':
        return 'sell';
      case '/notices/lostFound':
        return 'lostFound';
      case '/notices/inGoodHands':
        return 'inGoodHands';
      case '/notices/favorite':
        return 'favorite';
      case '/notices/own':
        return 'own';
      default:
        return 'sell';
    }
  };

  const category = renderCategory();

  const { data: pets } = useGetNoticeQuery(category);
  console.log(pets);

  return (
    <div className={styles.NoticesCategoriesList__Container}>
      {pets?.data ? (
        <ul className={styles.NoticesCategoriesList}>
          {pets.data.map(({ title }) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
};

export default NoticesCategoriesList;
