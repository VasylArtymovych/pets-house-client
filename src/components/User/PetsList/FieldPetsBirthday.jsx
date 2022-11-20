import { useState } from 'react';
import scss from './PetsList.module.scss';
import sprite from '../../../images/symbol-defs.svg';
import Calendar from '../Calendar';

const FieldPetsBirthday = ({ value, onIsUpdate }) => {
  const [isUpdate, setIsUpdate] = useState(onIsUpdate);
  console.log(isUpdate);
  const [petsName, setPetsName] = useState(value);
  console.log('petsName:', petsName);

  return (
    <li className={scss.pets__items}>
      {isUpdate ? (
        <button className={scss.pets__save} type="button" onClick={() => setIsUpdate(false)}>
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
      <p className={scss.pets__subtitle}>Date of birth:</p>
      {isUpdate ? (
        <Calendar customStyleMobile={scss.input__birthday} customStyleDesktop={scss.input__birthdayDesk} onBirthday={value} />
      ) : (
        <span className={scss.pets__info}>{value}</span>
      )}
    </li>
  );
};
export default FieldPetsBirthday;
