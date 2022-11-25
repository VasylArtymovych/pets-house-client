import React from 'react';
import { useNavigate } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import scss from './LearnMoreModal.module.scss';
import Button from 'components/Button';
import style from '../../Button/Button.module.scss';
import { useSelector } from 'react-redux';
import { useAddToFavoritesMutation, useDeleteFromFavoritesMutation } from '../../../redux/fetchNotice';

import sprite from '../../../images/symbol-defs.svg';

const LearnMore = ({
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
  favorite,
  // myads,
  onCloseModal,
  setIsFavorite
}) => {
  const [addToFavorites] = useAddToFavoritesMutation();
  const [deleteFromFavorites] = useDeleteFromFavoritesMutation();

  const isLogged = useSelector((state) => state.users.isLogged);
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    if (!isLogged) {
      navigate('/login');
      return;
    } else {
      addToFavorites(_id);
      setIsFavorite(true);
    }
  };

  const handleDeleteFromFavorites = () => {
    if (!isLogged) {
      navigate('/login');
      return;
    } else {
      deleteFromFavorites(_id);
      setIsFavorite(false);
    }
  };

  return (
    <>
      <div className={scss.wrap_container}>
        <div className={scss.wrap_container_padding}>
          <div className={scss.wrap_image_info}>
            <button className={scss.button__close} onClick={onCloseModal}>
              <PetsIcon sx={{ fontSize: 30 }} />
            </button>
            <div className={scss.image}>
              <img className={scss.photo} src={imageUrl} alt="Cat error" />
              <div className={scss.sale}>
                <span className={scss.text}>{category}</span>
              </div>
            </div>

            <div className={scss.wrap_info}>
              <h3 className={scss.title}>{title}</h3>
              <div className={scss.wrap_info_ul}>
                <div className={scss.wrap_info_first_column}>
                  <ul>
                    <li className={scss.first_column}>Name:</li>
                    <li className={scss.first_column}>Birthday:</li>
                    <li className={scss.first_column}>Breed:</li>
                    <li className={scss.first_column}>Place:</li>
                    <li className={scss.first_column}>The sex:</li>
                    <li className={scss.first_column}>Email :</li>
                    <li className={scss.first_column}>Phone:</li>
                    {category === 'Sell' && <li className={scss.first_column}>Sell:</li>}
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className={scss.second_column}>{name}</li>
                    <li className={scss.second_column}>{age}</li>
                    <li className={scss.second_column}>{breed}</li>
                    <li className={scss.second_column}>{place}</li>
                    <li className={scss.second_column}>{sex}</li>
                    <li className={scss.second_column}>{owner.email}</li>
                    <li className={scss.second_column}>{owner.phone}</li>
                    {category === 'Sell' && <li className={scss.first_column}>{price}$</li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={scss.wrap_coments_buttons}>
            <div>
              <p className={scss.comments}>Comments: {comments}</p>
            </div>
            <div className={scss.buttons}>
              {favorite ? (
                <Button
                  customStyle={style.button__auth_last + ' ' + style.botton__learn_more_mobile}
                  buttonName="Remove"
                  buttonIcon={
                    <svg className={scss.iconHeart}>
                      <use href={sprite + '#icon-heartFull'} />
                    </svg>
                  }
                  onClick={handleDeleteFromFavorites}
                ></Button>
              ) : (
                <Button
                  customStyle={style.button__auth_last + ' ' + style.botton__learn_more_mobile}
                  buttonName="Add to"
                  buttonIcon={
                    <svg className={scss.iconHeart}>
                      <use href={sprite + '#icon-heartEmpty'} />
                    </svg>
                  }
                  onClick={handleAddToFavorites}
                ></Button>
              )}
              <button type="button" className={scss.button__contact}>
                <a href={`tel:${owner.phone}`}>Contact</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
