import { useState } from 'react';
import { useUpdatePetMutation } from 'redux/fetchPets';
import { useTranslation } from 'react-i18next';

import sprite from 'images/symbol-defs.svg';
import scss from './PetsList.module.scss';

const FieldPetsComments = ({ value, onIsUpdate, _id }) => {
  const { t } = useTranslation();
  const [isUpdate, setIsUpdate] = useState(onIsUpdate);
  const [petsName, setPetsName] = useState(value);

  const [updatePet] = useUpdatePetMutation();

  const handleSend = () => {
    if (petsName.length === 0) {
      return;
    } else {
      updatePet({ _id, comments: petsName });
      setIsUpdate(false);
    }
  };
  return (
    <li className={scss.pets__items + ' ' + scss.pets__comment}>
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
      <div className={scss.pets__commentBox}>
        <p className={scss.pets__commentTitle}>
          <label htmlFor="comment">{t('Comments:')}</label>
        </p>
        {isUpdate ? (
          <textarea
            className={scss.pets__commentsText}
            name="comment"
            rows="3"
            cols="45"
            value={petsName}
            onChange={(e) => setPetsName(e.currentTarget.value)}
          ></textarea>
        ) : (
          <span className={scss.pets__commentInfo}>{value}</span>
        )}
      </div>
    </li>
  );
};
export default FieldPetsComments;
