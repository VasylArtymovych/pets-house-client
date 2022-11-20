import { useLocation } from 'react-router-dom';
import React from 'react';
import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import styles from './NoticesCategoriesList.module.scss';
import { useGetNoticeQuery, useGetNoticeFavoritesQuery, useGetUserNoticesQuery } from 'redux/fetchNotice';

const NoticesCategoriesList = () => {
  const { pathname } = useLocation();
  let petsData;

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

  const { data: pets } = useGetNoticeQuery(category);
  const { data: favorites } = useGetNoticeFavoritesQuery();
  const { data: userNotices } = useGetUserNoticesQuery();
  // console.log(pets.data);
  // console.log(pets);
  // console.log(favorites);
  // console.log(userNotices);
  // console.log(category);

  let renderData;

  if (category === 'sell' || category === 'lost-found' || category === 'inGoodHands') {
    renderData = pets;
  } else if (category === 'favorite') {
    renderData = favorites;
  } else {
    renderData = userNotices;
  }
  console.log(renderData);

  //Костыль, утром буду думать

  return (
    <div className={styles.NoticesCategoriesList__Container}>
      {pets && pets.data.length !== 0 ? (
        <ul className={styles.NoticesCategoriesList}>
          {pets.data.map(
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
                imageUrl={petImage}
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
