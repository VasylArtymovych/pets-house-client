import sprite from '../../../images/symbol-defs.svg';
import scss from './PetsList.module.scss';
import { useSelector } from 'react-redux';
import { useDeletePetMutation } from 'redux/fetchPets';

const PetsList = () => {
  const { pets } = useSelector((state) => state.users.user);

  const [deletePet] = useDeletePetMutation();

  return (
    <>
      {pets.length === 0 ? (
        <div className={scss.pets__notFound}>
          <p className={scss.pets__NFtext}>You haven't added your pet yet</p>
        </div>
      ) : (
        pets.map(({ petImage, name, dateOfBirth, breed, comments, _id }) => (
          <li className={scss.pets__item} key={_id}>
            <img className={scss.pets__animalImg} src={`http://localhost:8888/${petImage}`} alt="pet" />
            <div className={scss.pats__btns}>
              <button className={scss.pats__btn} type="button">
                <svg className={scss.pets__svg}>
                  <use href={sprite + '#icon-profilePencil'} />
                </svg>
              </button>
              <button className={scss.pats__btn} type="button" onClick={() => deletePet(_id)}>
                <svg className={scss.pets__svg}>
                  <use href={sprite + '#icon-remov-pets'} />
                </svg>
              </button>
            </div>
            <ul className={scss.pets__list}>
              <li className={scss.pets__items}>
                <p>
                  Name: <span className={scss.pets__info}>{name}</span>
                </p>
              </li>
              <li className={scss.pets__items}>
                <p>
                  Date of birth: <span className={scss.pets__info}>{dateOfBirth}</span>
                </p>
              </li>
              <li className={scss.pets__items}>
                <p>
                  Breed: <span className={scss.pets__info}>{breed}</span>
                </p>
              </li>
              <li className={scss.pets__items}>
                <p>
                  Comments:
                  <span className={scss.pets__info}>{comments}</span>
                </p>
              </li>
            </ul>
          </li>
        ))
      )}
    </>
  );
};

export default PetsList;
