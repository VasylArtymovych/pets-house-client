import { useState } from 'react';
import { useUpdateUserAvatarMutation } from 'redux/fetchUser';
import scss from './UserAvatarModal.module.scss';
import sprite from '../../../images/symbol-defs.svg';

const UserAvatarModal = ({ onCloseModal, onAvatarImg }) => {
  const [img, setImg] = useState(onAvatarImg);
  const [file, setFile] = useState(null);
  const [changeImg, setChangeImg] = useState(false);

  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const imageHandler = async (e) => {
    const fileUploaded = e.target.files[0];
    setImg(URL.createObjectURL(fileUploaded));
    // console.log('fileUploaded:', fileUploaded);
    const file = new FormData();
    file.append('avatar', fileUploaded);
    setFile(file);
  };

  const ImageSaveClick = async () => {
    // await
    updateUserAvatar(file);
    onCloseModal();
  };
  // console.log('file:', file);
  return (
    <div className={scss.avatar__modal}>
      <div className={scss.input__wrapper}>
        <button type="button" className={scss.avatar__close} onClick={onCloseModal}>
          <svg className={scss.close__svg}>
            <use href={sprite + '#icon-exit'} />
          </svg>
        </button>
        {changeImg === false ? (
          <img className={scss.avatar__img} src={img} alt="avatar" />
        ) : (
          <img className={scss.avatar__img} src={`http://localhost:8888/${img}`} alt="avatar" />
        )}

        <div className={scss.input__container}>
          <input className={scss.input__file} type="file" name="avatar" id="input__file" onChange={(e) => imageHandler(e)} accept="image/*" />
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
