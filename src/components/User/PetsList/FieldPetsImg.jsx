import scss from './PetsList.module.scss';
import sprite from '../../../images/symbol-defs.svg';
import { useState } from 'react';

const FieldPetsImg = ({ petImage }) => {
  const [imgRet, setImgPet] = useState(null);

  const imageHandler = (e) => {
    const fileUploaded = e.target.files[0];
    setImgPet(URL.createObjectURL(fileUploaded));
    const file = new FormData();
    file.append('avatar', fileUploaded);
    //залити в бд
  };
  return (
    <div className={scss.pets__imgContainer}>
      <img className={scss.pets__animalImg} src={`http://localhost:8888/${petImage}`} alt="pet" />
      <div className={scss.pets__imgAdd}>
        <input className={scss.input__file} type="file" name="avatar" id="input__file" accept="image/*" onChange={(e) => imageHandler(e)} />
        <label className={scss.input__fileButton} htmlFor="input__file">
          <svg className={scss.info__camera} width="30" height="30">
            <use href={sprite + '#icon-profilePhotoCamera'} />
          </svg>
        </label>
      </div>
    </div>
  );
};
export default FieldPetsImg;
