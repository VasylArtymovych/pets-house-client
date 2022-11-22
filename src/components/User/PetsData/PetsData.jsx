import PetsList from '../PetsList';
import scss from './PetsData.module.scss';
import { selectors } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const PetsData = () => {
  const { t } = useTranslation();
  const pets = useSelector(selectors.getUserPets);
  return (
    <ul className={scss.pets__container}>
      {pets.length === 0 ? (
        <div className={scss.pets__notFound}>
          <p className={scss.pets__NFtext}>{t('You havent added your pet yet')}</p>
        </div>
      ) : (
        pets.map((pet) => (
          <li className={scss.pets__item} key={pet._id}>
            <PetsList {...pet} />
          </li>
        ))
      )}
    </ul>
  );
};

export default PetsData;
