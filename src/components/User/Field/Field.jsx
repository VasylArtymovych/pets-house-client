import { Input } from 'components/Input';
import { useState } from 'react';
import sprite from '../../../images/symbol-defs.svg';
import scss from './Field.module.scss';
import { useUpdateUserMutation } from '../../../redux/fetchUser';

export const Field = ({ text, value }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [userName, setUserName] = useState(value);

  const [updateUser] = useUpdateUserMutation();

  const handleSend = () => {
    if (userName.length === 0) {
      return;
    } else {
      updateUser({ [text]: userName });
      setIsUpdate(false);
    }
  };

  return (
    <li className={scss.user__items}>
      <p>{text}:</p>
      {isUpdate ? (
        <>
          <Input customStyle={scss.input__change} type="text" name={text} onChange={(e) => setUserName(e.currentTarget.value)} value={userName} />
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
