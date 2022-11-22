import { useState } from 'react';
import { useUpdatePetMutation } from 'redux/fetchPets';
import Calendar from '../Calendar';
import sprite from '../../../images/symbol-defs.svg';
import scss from './PetsList.module.scss';
import { useTranslation } from 'react-i18next';

const FieldPetsBirthday = ({ value, onIsUpdate, _id }) => {
  const { t } = useTranslation();
  const [isUpdate, setIsUpdate] = useState(onIsUpdate);
  const [userPetshday, setPetsBirthday] = useState('');

  const [updatePet] = useUpdatePetMutation();

  const handleSend = () => {
    if (userPetshday.length === 0) {
      setIsUpdate(false);
      return;
    } else {
      const date = JSON.parse(userPetshday);
      updatePet({ _id, dateOfBirth: date });
      setIsUpdate(false);
    }
  };
  const handleDate = (e) => {
    setPetsBirthday(e);
  };
  return (
    <li className={scss.pets__items}>
      {isUpdate ? (
        <button className={scss.pets__save} type="button" onClick={handleSend}>
          <svg className={scss.icon__profileCheckMark}>
            <use href={sprite + '#icon-profileCheckMark'} />
          </svg>
        </button>
      ) : (
        <button className={scss.pats__btn} type="button" onClick={() => setIsUpdate(true)}>
          <svg className={scss.pets__svg}>
            <use href={sprite + '#icon-profilePencil'} />
          </svg>
        </button>
      )}
      <p className={scss.pets__subtitle}>{t('Date of birth:')}</p>
      {isUpdate ? (
        <Calendar
          onHandleDate={handleDate}
          customStyleMobile={scss.input__birthday}
          customStyleDesktop={scss.input__birthdayDesk}
          onBirthday={value}
        />
      ) : (
        <span className={scss.pets__info}>{value}</span>
      )}
    </li>
  );
};
export default FieldPetsBirthday;
