import PetsList from '../PetsList';
import scss from './PetsData.module.scss';
import { useTranslation } from 'react-i18next';

import { useGetUserPetsQuery } from 'redux/fetchPets';

const PetsData = () => {
  const { t } = useTranslation();
  const { data, isFetching } = useGetUserPetsQuery();

  return (
    <ul className={scss.pets__container}>
      {data && !isFetching && data.pets.length > 0 ? (
        data.pets.map((pet) => (
          <li className={scss.pets__item} key={pet._id}>
            <PetsList {...pet} />
          </li>
        ))
      ) : (
        <div className={scss.pets__notFound}>
          <p className={scss.pets__NFtext}>{t('You havent added your pet yet')}</p>
        </div>
      )}
    </ul>
  );
};

export default PetsData;
