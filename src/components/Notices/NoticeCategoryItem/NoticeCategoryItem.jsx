import { useModal } from 'hooks';
import LearnMoreModal from '../LearnMoreModal';
import styles from './NoticeCategoryItem.module.scss';
import sprite from '../../../images/symbol-defs.svg';
import moment from 'moment';
import Modal from 'components/Modal';
import { useAddToFavoritesMutation, useDeleteFromFavoritesMutation, useDeleteUserNoticeByIdMutation } from '../../../redux/fetchNotice';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/selectors.js';
import { useState } from 'react';
import { useGetCurrentUserQuery } from '../../../redux/fetchUser';
// import { useEffect } from 'react';
moment().format();

const NoticeCategoryItem = ({
  _id,
  name,
  owner,
  comments = 'There is no comments',
  sex,
  category,
  imageUrl,
  title,
  breed,
  place,
  age,
  price,
  // favorite,
  myads
}) => {
  const { isModalOpen, closeModal, toggleModal } = useModal();
  // const [favorite, setFavorite] = useState(false);
  // const token = useSelector(selectors.getToken);
  const userId = useSelector(selectors.getUserId);

  // console.log(userId);
  const userName = useSelector(selectors.getUserName);
  const userFavorites = useSelector(selectors.getFavorites);

  const favorite = userFavorites.includes(_id);

  // console.log(userFavorites);

  // useEffect(() => {
  //   setFavorite(userFavorites.includes(_id));
  // }, [_id, userFavorites]);
  // console.log(userName);

  // const User = useGetCurrentUserQuery();
  // console.log(User);

  // const [cardId, setCardId] = useState('');
  const [addToFavorites] = useAddToFavoritesMutation();
  const [deleteFromFavorites] = useDeleteFromFavoritesMutation();
  const [deleteUserNoticeById] = useDeleteUserNoticeByIdMutation();
  const [isFavorite, setIsFavorite] = useState(favorite);

  const normilizeCategory = (category) => {
    switch (category) {
      case 'sell':
        return 'Sell';
      case 'lost-found':
        return 'Lost/Found';
      case 'inGoodHands':
        return 'In good hands';
      default:
        return;
    }
  };

  const calculatedogAge = (age) => {
    const dogAge = moment(age, 'DD.MM.YYYY').fromNow().slice(0, -4);
    return dogAge;
  };

  const handleAddToFavorites = (event) => {
    // console.log(event);
    // console.log(event.target.parentElement.parentElement.parentElement.id);
    // console.log(event.target.parentElement.id);
    const cardId = event.target.parentElement.id === '' ? event.target.parentElement.parentElement.parentElement.id : event.target.parentElement.id;
    // console.log(cardId);
    addToFavorites(cardId);
    setIsFavorite(true);
  };

  const handleDeleteFromFavorites = (event) => {
    const cardId = event.target.parentElement.id === '' ? event.target.parentElement.parentElement.parentElement.id : event.target.parentElement.id;

    deleteFromFavorites(cardId);
    setIsFavorite(false);
  };

  const handleDeleteUserNotice = (event) => {
    const cardId = event.target.parentElement.id === '' ? event.target.parentElement.parentElement.parentElement.id : event.target.parentElement.id;
    // console.log(cardId);
    deleteUserNoticeById(cardId);
  };

  return (
    <>
      <li key={_id} className={styles.NoticeCategoryItem} id={_id}>
        <img src={imageUrl} alt="" className={styles.NoticeCategoryItem__img} />
        <p className={styles.NoticeCategoryItem__category}>{normilizeCategory(category)}</p>
        {isFavorite ? (
          <button className={styles.NoticeCategoryItem__heartbutton} type="button" onClick={handleDeleteFromFavorites}>
            <svg className={styles.NoticeCategoryItem__svg}>
              <use href={sprite + '#icon-heartFull'} />
            </svg>
          </button>
        ) : (
          <button className={styles.NoticeCategoryItem__heartbutton} type="button" onClick={handleAddToFavorites}>
            <svg className={styles.NoticeCategoryItem__svg}>
              <use href={sprite + '#icon-heartEmpty'} />
            </svg>
          </button>
        )}
        {myads && (
          <button className={styles.NoticeCategoryItem__deletebutton} type="button" onClick={handleDeleteUserNotice}>
            <svg className={styles.NoticeCategoryItem__svgdelete}>
              <use href={sprite + '#icon-remov-pets'} />
            </svg>
          </button>
        )}
        <div className={styles.NoticeCategoryItem__infoContainer}>
          <h3 className={styles.NoticeCategoryItem__title}>{title}</h3>
          <div className={`${styles.NoticeCategoryItem__textContainer} ${styles.sell}`}>
            <ul className={styles.NoticeCategoryItem__textListKeys}>
              <li className={styles.NoticeCategoryItem__textItem}>
                <p>Breed:</p>
              </li>
              <li className={styles.NoticeCategoryItem__textItem}>
                <p>Place:</p>
              </li>
              <li className={styles.NoticeCategoryItem__textItem}>
                <p>Age:</p>
              </li>
              {category === 'sell' && (
                <li className={styles.NoticeCategoryItem__textItem}>
                  <p>Price:</p>
                </li>
              )}
            </ul>
            <ul className={styles.NoticeCategoryItem__textListValues}>
              <li className={styles.NoticeCategoryItem__textItem}>
                <span className={styles.NoticeCategoryItem__textItemspan}>{breed}</span>
              </li>
              <li className={styles.NoticeCategoryItem__textItem}>
                <span className={styles.NoticeCategoryItem__textItemspan}>{place}</span>
              </li>
              <li className={styles.NoticeCategoryItem__textItem}>
                <span className={styles.NoticeCategoryItem__textItemspan}>{calculatedogAge(age)}</span>
              </li>
              {category === 'sell' && (
                <li className={styles.NoticeCategoryItem__textItem}>
                  <span className={styles.NoticeCategoryItem__textItemspan}>{price}$</span>
                </li>
              )}
            </ul>
          </div>

          <button type="button" className={styles.NoticeCategoryItem__LearnMoreButton} onClick={toggleModal}>
            <span className={styles.NoticeCategoryItem__LearnMoreButtonText}>Learn more</span>
          </button>
        </div>
      </li>
      {isModalOpen && (
        <Modal onCloseModal={closeModal} mode="dark">
          <LearnMoreModal
            onCloseModal={closeModal}
            _id={_id}
            name={name}
            owner={owner}
            sex={sex}
            comments={comments}
            category={normilizeCategory(category)}
            imageUrl={imageUrl}
            title={title}
            breed={breed}
            place={place}
            price={price}
            age={age}
            favorite={favorite}
            myads={myads}
          />
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
