import PetsList from '../PetsList';
import scss from './PetsData.module.scss';

const PetsData = () => {
  return (
    <ul className={scss.pets__container}>
      <PetsList />
    </ul>
  );
};

export default PetsData;
