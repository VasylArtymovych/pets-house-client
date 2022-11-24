/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/query';
import { useTranslation } from 'react-i18next';
import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import styles from './NoticesCategoriesList.module.scss';
import { useGetNoticeQuery, useGetNoticeFavoritesQuery, useGetUserNoticesQuery } from 'redux/fetchNotice';
import { useGetCurrentUserQuery } from 'redux/fetchUser';
import { selectors } from 'redux/selectors';
// import { postToUserNotice } from 'redux/sliceNotice';
import { HOST } from 'config';
// import { useOutletContext } from 'react-router-dom';

const NoticesCategoriesList = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const isLogged = useSelector(selectors.isLogged);
  // const dispatch = useDispatch();
  const petsByWord = useSelector(selectors.stateUserNotices);
  // let [petsByWord] = useOutletContext();

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

  let { refetch } = useGetCurrentUserQuery(isLogged, { skip: !isLogged });

  let { data } = useGetNoticeQuery(category);

  let { data: favorites } = useGetNoticeFavoritesQuery(isLogged, { skip: !isLogged });

  let { data: userNotices } = useGetUserNoticesQuery(isLogged, { skip: !isLogged });

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

  // if (petsByWord) {
  //   setPets(petsByWord);
  //   [petsByWord] = null;
  // }
  console.log(pets);
  return (
    <div className={styles.NoticesCategoriesList__Container}>
      {pets && pets.length !== 0 ? (
        // <ul className={styles.NoticesCategoriesList}>
        <ul className={styles.NoticesCategoriesList} style={{ marginTop: isLogged && '0px' }}>
          {petsByWord
            ? petsByWord.map(
                ({ _id, name, owner, comments = 'There is no comments', sex, category, petImage, title, breed, location, dateOfBirth, price }) => {
                  return (
                    <NoticeCategoryItem
                      key={_id}
                      _id={_id}
                      name={name}
                      owner={owner}
                      sex={sex}
                      comments={comments}
                      category={category}
                      imageUrl={`${HOST}/${petImage}`}
                      title={title}
                      breed={breed}
                      place={location}
                      price={price}
                      age={dateOfBirth}
                      refetchUser={refetch}
                      isLogged={isLogged}
                    />
                  );
                }
              )
            : pets.map(
                ({ _id, name, owner, comments = 'There is no comments', sex, category, petImage, title, breed, location, dateOfBirth, price }) => {
                  return (
                    <NoticeCategoryItem
                      key={_id}
                      _id={_id}
                      name={name}
                      owner={owner}
                      sex={sex}
                      comments={comments}
                      category={category}
                      imageUrl={`${HOST}/${petImage}`}
                      title={title}
                      breed={breed}
                      place={location}
                      price={price}
                      age={dateOfBirth}
                      refetchUser={refetch}
                      isLogged={isLogged}
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
