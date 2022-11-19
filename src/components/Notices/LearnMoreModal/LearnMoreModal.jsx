import React from 'react';
import scss from './LearnMoreModal.module.scss';
import Button from 'components/Button';
import style from '../../components/Button/Button.module.scss';

import sprite from '../../images/symbol-defs.svg';

const LearnMore = () => {
  return (
    <>
      <div className={scss.wrap_container}>
        <div className={scss.wrap_container_padding}>
          <div className={scss.image}>
            <img
              className={scss.photo}
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg"
              alt="Cat error"
            />
            <div className={scss.sale}>
              <span className={scss.text}>In good hands</span>
            </div>
          </div>

          <div className={scss.wrap_info}>
            <h3 className={scss.title}>Сute dog looking for a home</h3>
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
                </ul>
              </div>
              <div>
                <ul>
                  <li className={scss.second_column}>Rich</li>
                  <li className={scss.second_column}>21.09.2020</li>
                  <li className={scss.second_column}>Pomeranian</li>
                  <li className={scss.second_column}>Lviv</li>
                  <li className={scss.second_column}>male</li>
                  <li className={scss.second_column}>user@mail.com </li>
                  <li className={scss.second_column}>+380971234567</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p className={scss.comments}>
              Comments: Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
            </p>
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
