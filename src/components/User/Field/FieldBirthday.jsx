import { useState } from 'react';
import sprite from '../../../images/symbol-defs.svg';
import Calendar from '../Calendar';
import scss from './Field.module.scss';
import { useUpdateUserMutation } from '../../../redux/fetchUser';

export const FieldBirthday = ({ text, value }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [userBirthday, setUserBirthday] = useState('');

  const [updateUser] = useUpdateUserMutation();

  const handleSend = () => {
    if (userBirthday.length === 0) {
      setIsUpdate(false);
      return;
    } else {
      const date = JSON.parse(userBirthday);
      updateUser({ birthday: date });
      setIsUpdate(false);
    }
  };
  const handleDate = (e) => {
    setUserBirthday(e);
  };

  return (
    <li className={scss.user__items}>
      <p>{text}:</p>
      {isUpdate ? (
        <>
          <Calendar
            onHandleDate={handleDate}
            customStyleMobile={scss.input__birthday}
            customStyleDesktop={scss.input__birthdayDesk}
            onBirthday={value}
          />
          <button className={scss.input__btn} type="button" onClick={handleSend}>
            <svg className={scss.icon__profileCheckMark}>
              <use href={sprite + '#icon-profileCheckMark'} />
            </svg>
          </button>
        </>
      ) : (
        <>
          {!value ? <span className={scss.items_info}>00.00.0000</span> : <span className={scss.items_info}>{value}</span>}
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
