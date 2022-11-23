import scss from './PetsList.module.scss';
import sprite from '../../../images/symbol-defs.svg';
import { useAddAvatarToPetMutation } from 'redux/fetchPets';

const FieldPetsImg = ({ petImage, _id }) => {
  const [addAvatarToPet] = useAddAvatarToPetMutation();

  console.log('idAll', _id);

  const imageHandler = async (e, petId) => {
    console.log('petId', petId);
    const fileUploaded = e.target.files[0];
    const file = new FormData();
    file.append('petImage', fileUploaded);
    addAvatarToPet({ petId, petImage: file });
  };

  return (
    <div className={scss.pets__imgContainer}>
      <div className={scss.pets__imgBox}>
        <img className={scss.pets__animalImg} src={`http://localhost:8888/${petImage}`} alt="pet" />
      </div>
      <div className={scss.pets__imgAdd}>
        <input
          className={scss.input__file}
          type="file"
          name="petImage"
          id="input__animal"
          // id={_id}
          accept="image/*"
          onChange={(e) => {
            imageHandler(e, _id);
            console.log('_id', _id);
          }}
        />

        {/* htmlFor={_id} */}
        <label className={scss.input__fileButton} htmlFor={'input__animal'}>
          <svg className={scss.info__camera} width="30" height="30">
            <use href={sprite + '#icon-profilePhotoCamera'} />
          </svg>
        </label>
      </div>
    </div>
  );
};
export default FieldPetsImg;
