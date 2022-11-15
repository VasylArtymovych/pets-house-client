import { Input } from 'components/Input';
import { useState } from 'react';
import sprite from '../../../images/symbol-defs.svg';
import scss from './Field.module.scss';

export const Field = ({ text, value }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <li className={scss.user__items}>
      <p>{text}:</p>
      {isUpdate ? (
        <>
          <Input customStyle={scss.input__change} type="text" value={value} />
          <button className={scss.input__btn} type="button" onClick={() => setIsUpdate(false)}>
            <svg className={scss.icon__profileCheckMark}>
              <use href={sprite + '#icon-profileCheckMark'} />
            </svg>
          </button>
        </>
      ) : (
        <>
          <span className={scss.items_info}>{value}</span>
          <button className={scss.change__btn} onClick={() => setIsUpdate(true)}>
            <svg className={scss.icon__profilePencil}>
              <use href={sprite + '#icon-profilePencil'} />
            </svg>
          </button>
        </>
      )}
    </li>
  );
};