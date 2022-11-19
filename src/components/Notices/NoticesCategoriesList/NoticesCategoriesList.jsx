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
      case '/notices/lost-found':
        return 'lostFound';
      case '/notices/for-free':
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
  // console.log(pets.data);
  console.log(pets);

  return (
    <div className={styles.NoticesCategoriesList__Container}>
      {pets && pets.data.length !== 0 ? (
        <ul className={styles.NoticesCategoriesList}>
          {pets.data.map(({ _id, category, imageUrl, title, breed, location, dateOfBirth, price, favorite, myads }) => (
            <NoticeCategoryItem
              key={_id}
              category={category}
              imageUrl={imageUrl}
              title={title}
              breed={breed}
              place={location}
              price={price}
              age={dateOfBirth}
              favorite={favorite}
              myads={myads}
            />
          ))}
        </ul>
      ) : (
        <p>There are no advertisements in this category</p>
      )}
    </div>
  );
};

export default NoticesCategoriesList;
