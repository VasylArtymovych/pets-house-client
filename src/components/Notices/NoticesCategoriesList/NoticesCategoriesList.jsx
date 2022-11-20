import { useLocation } from 'react-router-dom';
import React from 'react';
import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import styles from './NoticesCategoriesList.module.scss';
import { useGetNoticeQuery, useGetNoticeFavoritesQuery, useGetUserNoticesQuery } from 'redux/fetchNotice';
import { useState, useEffect } from 'react';

const NoticesCategoriesList = () => {
  const { pathname } = useLocation();

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

  let { data } = useGetNoticeQuery(category);

  let { data: favorites } = useGetNoticeFavoritesQuery();

  let { data: userNotices } = useGetUserNoticesQuery();

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
  // console.log(pets.data);
  // console.log(pets);
  // console.log(favorites);
  // console.log(userNotices);
  // console.log(category);

  // let renderData;

  // console.log(pets);

  // console.log(renderData);

  //Костыль, утром буду думать

  return (
    <div className={styles.NoticesCategoriesList__Container}>
      {pets && pets.length !== 0 ? (
        <ul className={styles.NoticesCategoriesList}>
          {pets.map(
            ({
              _id,
              name,
              owner,
              comments = 'There is no comments',
              sex,
              category,
              petImage,
              title,
              breed,
              location,
              dateOfBirth,
              price,
              favorite,
              myads
            }) => (
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
                favorite={favorite}
                myads={myads}
              />
            )
          )}
        </ul>
      ) : (
        <p>There are no advertisements in this category</p>
      )}
    </div>
  );
};

export default NoticesCategoriesList;
