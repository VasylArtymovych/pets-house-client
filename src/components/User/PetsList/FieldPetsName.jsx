import { Input } from 'components/Input';
import { useState } from 'react';
import sprite from '../../../images/symbol-defs.svg';
import scss from './PetsList.module.scss';

const FieldPetsName = ({ text, value, onIsUpdate }) => {
  const [isUpdate, setIsUpdate] = useState(onIsUpdate);
  console.log(isUpdate);
  const [petsName, setPetsName] = useState(value);
  console.log('petsName:', petsName);

  // const handleSend = () => {
  //   if (petsName.length === 0) {
  //     return;
  //   } else {
  //     updatePet({ [name]: petsName });
  //     setIsUpdate(false);
  //   }
  // };
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
      <p className={scss.pets__subtitle}>{text}:</p>
      {isUpdate ? (
        <div className={scss.pets__changeBox}>
          <Input value={petsName} customStyle={scss.input__change} name={text} onChange={(e) => setPetsName(e.currentTarget.value)} />
        </div>
      ) : (
        <>
          <span className={scss.pets__info}>{value}</span>
        </>
      )}
    </li>
  );
};
export default FieldPetsName;
