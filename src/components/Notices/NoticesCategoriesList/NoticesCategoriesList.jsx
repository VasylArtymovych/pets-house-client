/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom';
import React from 'react';
import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import styles from './NoticesCategoriesList.module.scss';
import { useGetNoticeQuery, useGetNoticeFavoritesQuery, useGetUserNoticesQuery } from 'redux/fetchNotice';
import { useGetCurrentUserQuery } from 'redux/fetchUser';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/selectors.js';
import { skipToken } from '@reduxjs/toolkit/query';
import { useTranslation } from 'react-i18next';

const NoticesCategoriesList = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const userAds = useSelector(selectors.getUserNotices);
  const isLogged = useSelector(selectors.isLogged);

  const renderCategory = () => {
    switch (pathname) {
      case '/notices/sell':
        return 'sell';
      case '/notices/lost-found':
        return 'lost-found';
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

  let { data: user, refetch } = useGetCurrentUserQuery();

  let { data } = useGetNoticeQuery(category);

  let { data: favorites } = useGetNoticeFavoritesQuery(isLogged ? null : skipToken);

  let { data: userNotices } = useGetUserNoticesQuery(isLogged ? null : skipToken);

  const [pets, setPets] = useState(null);

  useEffect(() => {
    if (data || favorites || userNotices) {
      if (category === 'sell' || category === 'lost-found' || category === 'inGoodHands') {
        if (!data) {
          data = null;
          setPets(data);
          return;
        }
        setPets(data.data);
        return;
      } else if (category === 'favorite') {
        if (!favorites) {
          favorites = null;
          setPets(favorites);
          return;
        }
        setPets(favorites.favorites);
        return;
      } else {
        if (!userNotices) {
          userNotices = null;
          setPets(userNotices);
          return;
        }
        setPets(userNotices.notices);
        return;
      }
    } else {
      return;
    }
  }, [category, data, favorites, userNotices]);

  console.log(pets);
  return (
    <div className={styles.NoticesCategoriesList__Container}>
      {pets && pets.length !== 0 ? (
        <ul className={styles.NoticesCategoriesList}>
          {pets.map(
            ({ _id, name, owner, comments = 'There is no comments', sex, category, petImage, title, breed, location, dateOfBirth, price }) => {
              const myads = userAds.includes(_id);

              return (
                <NoticeCategoryItem
                  key={_id}
                  _id={_id}
                  name={name}
                  owner={owner}
                  sex={sex}
                  comments={comments}
                  category={category}
                  imageUrl={`http://localhost:8888/${petImage}`}
                  title={title}
                  breed={breed}
                  place={location}
                  price={price}
                  age={dateOfBirth}
                  myads={myads}
                  refetchUser={refetch}
                />
              );
            }
          )}
        </ul>
      ) : (
        <p>{t('There are no advertisements in this category')}</p>
      )}
    </div>
  );
};

export default NoticesCategoriesList;
