import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '../../Input';
import css from './NoticesSearch.module.scss';
import sprite from 'images/symbol-defs.svg';
import { useTranslation } from 'react-i18next';

const NoticesSearch = () => {
  const [value, setValue] = useState('');
  const [, setSearchParams] = useSearchParams();
  let query;
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();

    query = event.target[0].value.toLowerCase().trim();

    if (query === '') {
      toast.warn(`Type something to search.`);
      return;
    }
    setSearchParams({ search: query });
    // event.target.reset();
  };

  const handleResetQuery = (event) => {
    console.log(event);
    setSearchParams({ search: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.searchBar__input_wrap}>
        <Input name="findpet" type="text" value={query} placeholder={t('Search')} customStyle={css.searchBar__input} />
        <button className={css.searchBar__input_button} type="submit">
          <svg className={css.iconHeart + ' ' + css.searchBar__input_icon}>
            <use href={sprite + '#icon-loupe'} />
          </svg>
        </button>
        <button className={css.searchBar__input_button_delete} type="submit" onClick={handleResetQuery}>
          <svg className={css.iconDelete + ' ' + css.searchBar__input_icon}>
            <use href={sprite + '#icon-blackCross'} />
          </svg>
        </button>
      </form>
    </>
  );
};

export default NoticesSearch;
