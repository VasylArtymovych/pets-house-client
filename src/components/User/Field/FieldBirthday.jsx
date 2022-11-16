import { useState } from 'react';
import sprite from '../../../images/symbol-defs.svg';
import Calendar from '../Calendar';
import scss from './Field.module.scss';

export const FieldBirthday = ({ text, value }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <li className={scss.user__items}>
      <p>{text}:</p>
      {isUpdate ? (
        <>
          <Calendar customStyle={scss.input__birthday} />
          <button className={scss.input__btn} type="button" onClick={() => setIsUpdate(false)}>
            <svg className={scss.icon__profileCheckMark}>
              <use href={sprite + '#icon-profileCheckMark'} />
            </svg>
          </button>
        </>
      ) : (
        <>
          <span className={scss.items_info}>00.00.0000</span>
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
