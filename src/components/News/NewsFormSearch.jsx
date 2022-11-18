// import { useState } from "react";
import scss from './News.module.scss';
import { Input } from 'components/Input';
import Scss from 'components/Input/Input.module.scss'

const FormSearchNews = () => {
  return (
    <div className={scss.container}>
      <h2 className={scss.title}>News</h2>
      <Input customStyle={Scss.InputNews} placeholder={'Search'}>
        <button>
          <svg class="search_icon" width="16px" height="12px">
            <use href="../../images/img_our_friend/sprite.svg#icon-search"></use>
          </svg>
        </button>
      </Input>
    </div>
  );
};

export default FormSearchNews;
