import sprite from '../../../images/symbol-defs.svg';
import scss from './PetsList.module.scss';
import { useState } from 'react';
import { useDeletePetMutation } from 'redux/fetchPets';
// import { ErrorMessage, Form, Formik, Field } from 'formik';
import FieldPetsImg from './FieldPetsImg';
import FieldPetsName from './FieldPetsName';
import FieldPetsBirthday from './FieldPetsBirthday';
import FieldPetsComments from './FieldPetsComments';
// import { Input } from 'components/Input';
// import { useSelector } from 'react-redux';
// import { selectors } from '../../../redux/selectors.js';

const FieldPets = ({ petImage, name, dateOfBirth, breed, comments, _id }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  // const [petsName, setPetsName] = useState(name);
  const [deletePet] = useDeletePetMutation();
  // const [updatePet] = useUpdatePetMutation();

  // const pets = useSelector(selectors.getUserPets);
  // const handleSend = () => {
  //   if (petsName.length === 0) {
  //     return;
  //   } else {
  //     updatePet({ [name]: petsName });
  //     setIsUpdate(false);
  //   }
  // };

  return (
    <li className={scss.pets__item}>
      {isUpdate ? (
        <div>
          <button className={scss.pets__save} type="button" onClick={() => setIsUpdate(false)}>
            <svg className={scss.icon__profileCheckMark}>
              <use href={sprite + '#icon-profileCheckMark'} />
            </svg>
          </button>
        </div>
      ) : (
        <>
          <FieldPetsImg petImage={petImage} />
          {/* <img className={scss.pets__animalImg} src={`http://localhost:8888/${petImage}`} alt="pet" /> */}
          <div className={scss.pats__btns}>
            {/* <button className={scss.pats__btn} type="button" onClick={() => setIsUpdate(true)}>
              <svg className={scss.pets__svg}>
                <use href={sprite + '#icon-profilePencil'} />
              </svg>
            </button> */}
            <button className={scss.pats__delete} type="button" onClick={() => deletePet(_id)}>
              <svg className={scss.pets__deleteSvg}>
                <use href={sprite + '#icon-remov-pets'} />
              </svg>
            </button>
          </div>
          <ul className={scss.pets__list}>
            <FieldPetsName value={name} text="name" onIsUpdate={isUpdate} />
            <FieldPetsBirthday value={dateOfBirth} />
            <FieldPetsName value={breed} text="breed" />
            <FieldPetsComments value={comments} />
            {/* {isUpdate ? (
          <div>
            <Input customStyle={scss.input__change} type="text" name={name} onChange={(e) => setPetsName(e.currentTarget.value)} value={petsName} />
            <button className={scss.pets__save} type="button" onClick={handleSend}>
              <svg className={scss.icon__profileCheckMark}>
                <use href={sprite + '#icon-profileCheckMark'} />
              </svg>
            </button>
          </div>
        ) : ( */}
            {/* <li className={scss.pets__items}>
              <p>
                Name: <span className={scss.pets__info}>{name}</span>
              </p>
            </li> */}
            {/* )} */}
            {/* <li className={scss.pets__items}>
              <p>
                Date of birth: <span className={scss.pets__info}>{dateOfBirth}</span>
              </p>
            </li> */}

            {/* <li className={scss.pets__items}>
              <p>
                Breed: <span className={scss.pets__info}>{breed}</span>
              </p>
            </li> */}
            {/* <li className={scss.pets__items}>
              <p>
                Comments:
                <span className={scss.pets__info}>{comments}</span>
              </p>
            </li> */}
          </ul>
        </>
      )}
    </li>
  );
};
export default FieldPets;
