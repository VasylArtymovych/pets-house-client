import { useState } from 'react';
import sprite from '../../../images/symbol-defs.svg';
import Calendar from '../Calendar';
import scss from './Field.module.scss';
import { useUpdateUserMutation } from '../../../redux/fetchUser';

export const FieldBirthday = ({ text, value }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [userName, setUserName] = useState(value);

  console.log('userName:', userName);

  const [updateUser] = useUpdateUserMutation();
  const handleSend = () => {
    if (userName.length === 0) {
      return;
    } else {
      updateUser({ birthday: userName });
      setIsUpdate(false);
    }
  };
  const handleData = (e) => {
    setUserName(e);
  };

  return (
    <li className={scss.user__items}>
      <p>{text}:</p>
      {isUpdate ? (
        <>
          <Calendar onHandleData={handleData} customStyleMobile={scss.input__birthday} customStyleDesktop={scss.input__birthdayDesk} />
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
