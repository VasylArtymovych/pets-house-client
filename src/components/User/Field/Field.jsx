import { useState } from 'react';
import { useUpdateUserMutation } from 'redux/fetchUser';

import { Input } from 'components/Input';

import sprite from 'images/symbol-defs.svg';
import scss from './Field.module.scss';

export const Field = ({ text, value }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [userName, setUserName] = useState(value);

  const [updateUser] = useUpdateUserMutation();

  const handleChange = (e) => {
    if (e.currentTarget.value === userName) return;
    setUserName(e.currentTarget.value);
  };

  const handleSend = () => {
    if (userName.length === 0 || value === userName) {
      setIsUpdate(false);
      return;
    } else {
      updateUser({ [text]: userName });
      setIsUpdate(false);
    }
  };

  return (
    <li className={scss.user__items}>
      <p className={scss.user__title}>{text}:</p>
      {isUpdate ? (
        <>
          <Input customStyle={scss.input__change} type="text" name={text} onChange={handleChange} value={userName} />
          <button className={scss.input__btn} type="button" onClick={handleSend}>
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
