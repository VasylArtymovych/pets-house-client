import React from 'react';
import scss from './LearnMoreModal.module.scss';
import Button from 'components/Button';
import style from '../../Button/Button.module.scss';

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
  myads
}) => {
  return (
    <>
      <div className={scss.wrap_container}>
        <div className={scss.wrap_container_padding}>
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
                  <li className={scss.second_column}>user@mail.com </li>
                  <li className={scss.second_column}>+380971234567</li>
                  {category === 'Sell' && <li className={scss.first_column}>{price}$</li>}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p className={scss.comments}>Comments: {comments}</p>
          </div>
          <div className={scss.buttons}>
            <Button
              customStyle={style.button__auth_last + ' ' + style.botton__learn_more_mobile}
              buttonName="Add to"
              buttonIcon={
                <svg className={scss.iconHeart}>
                  <use href={sprite + '#icon-heartFull'} />
                </svg>
              }
            ></Button>
            <Button customStyle={style.botton__learn_more_mobile} buttonName="Contact"></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
