import { useTranslation } from 'react-i18next';
import { useGetUserPetsQuery } from 'redux/fetchPets';
import { selectors } from 'redux/selectors';
import { useSelector } from 'react-redux';

import PetsList from '../PetsList';

import scss from './PetsData.module.scss';

const PetsData = () => {
  const { t } = useTranslation();
  const token = useSelector(selectors.getToken);
  const { data, isFetching } = useGetUserPetsQuery(token, { skip: !token });

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
