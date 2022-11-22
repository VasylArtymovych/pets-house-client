import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Input } from '../../Input';
import css from './NoticesSearch.module.scss';
import sprite from 'images/symbol-defs.svg';
import scss from '../LearnMoreModal/LearnMoreModal.module.scss';
import { useTranslation } from 'react-i18next';


const NoticesSearch = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();
  const handleInput = (event) => {
    const newQuery = event.target.value.toLowerCase().trim();
    setQuery(newQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === '') {
      toast.warn(`Type the name.`);
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>

      <form onSubmit={handleSubmit} className={css.searchBar__input_wrap}>
        <Input  name="findpet" type="text" value={query}  placeholder={t('Search')} customStyle={css.searchBar__input} onChange={handleInput} />
        <button className={css.searchBar__input_button} type="submit">
          <svg className={scss.iconHeart + ' ' + css.searchBar__input_icon}>
            <use href={sprite + '#icon-loupe'} />
          </svg>
        </button>
      </form>
    </>
  );
};

export default NoticesSearch;
