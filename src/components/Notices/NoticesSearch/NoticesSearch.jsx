import React from 'react';
import { Input } from '../../Input';
import css from './NoticesSearch.module.scss';

import sprite from '../../../images/symbol-defs.svg';
import scss from '../LearnMoreModal/LearnMoreModal.module.scss';

const NoticesSearch = () => {
  const onChange = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className={css.searchBar__input_wrap}>
        <Input
          name="findpet"
          type="text"
          placeholder="Search"
          customStyle={css.searchBar__input}
          onChange={onChange}
          label={
            <button className={css.searchBar__input_button}>
              <svg className={scss.iconHeart + ' ' + css.searchBar__input_icon}>
                <use href={sprite + '#icon-loupe'} />
              </svg>
            </button>
          }
        ></Input>
      </div>
    </>
  );
};

export default NoticesSearch;
