import scss from './UserAvatarModal.module.scss';
import sprite from '../../../images/symbol-defs.svg';
import DefaultAvatar from '../../../images/desctop/DefaultAvatar.png';
import { useState } from 'react';

const UserAvatarModal = ({ onCloseModal, onImageSaveHandle }) => {
  const [img, setImg] = useState(null);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImg(URL.createObjectURL(file));
  };

  const ImageSaveClick = () => {
    onImageSaveHandle(img);
    onCloseModal();
  };
  return (
    <div className={scss.avatar__modal}>
      <div className={scss.input__wrapper}>
        <button type="button" className={scss.avatar__close} onClick={onCloseModal}>
          <svg className={scss.close__svg}>
            <use href={sprite + '#icon-exit'} />
          </svg>
        </button>
        {img === null ? (
          <img className={scss.avatar__img} src={DefaultAvatar} alt="avatar" id="image" />
        ) : (
          <img className={scss.avatar__img} src={img} alt="avatar" />
        )}

        <div className={scss.input__container}>
          <input className={scss.input__file} type="file" id="input__file" onChange={(e) => imageHandler(e)} accept="image/*" multiple />
          <label className={scss.input__fileButton} htmlFor="input__file">
            <span className={scss.input__fileIcon}>
              <svg className={scss.input__iconSave} width="40" height="40">
                <use href={sprite + '#icon-save'} />
              </svg>
            </span>

            <span className={scss.input__buttonText}>Select a file</span>
          </label>
          <button className={scss.input__fileIconDelete} type="button">
            <svg className={scss.input__iconDelete}>
              <use href={sprite + '#icon-remov-pets'} />
            </svg>
          </button>
        </div>
        <button className={scss.save__avatar} type="submit" onClick={ImageSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default UserAvatarModal;
