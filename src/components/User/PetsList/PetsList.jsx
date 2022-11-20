import scss from './PetsList.module.scss';
import { useSelector } from 'react-redux';
import FieldPets from './FieldPets';

const PetsList = () => {
  const { pets } = useSelector((state) => state.users.user);

  return (
    <>
      {pets.length === 0 ? (
        <div className={scss.pets__notFound}>
          <p className={scss.pets__NFtext}>You haven't added your pet yet</p>
        </div>
      ) : (
        pets.map(({ petImage, name, dateOfBirth, breed, comments, _id }) => (
          <FieldPets petImage={petImage} name={name} dateOfBirth={dateOfBirth} breed={breed} comments={comments} _id={_id} key={_id} />
        ))
      )}
    </>
  );
};

export default PetsList;
