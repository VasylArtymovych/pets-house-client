import UserDataItem from '../UserDataItem';
import scss from './UserData.module.scss';
import sprite from '../../../images/symbol-defs.svg';
import DefaultAvatar from '../../../images/desctop/DefaultAvatar.png';
import { useModal } from 'hooks';
import Modal from 'components/Modal';
import UserAvatarModal from '../UserAvatarModal';
import { useSelector } from 'react-redux';
import { selectors } from '../../../redux/selectors.js';

const UserData = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();

  const avatar = useSelector(selectors.getUserAvatar);

  const avatarImg = avatar ? `http://localhost:8888/${avatar}` : DefaultAvatar;

  return (
    <div className={scss.data__container}>
      <div className={scss.avatar__container}>
        <img className={scss.avatar__img} src={avatarImg} alt="avatar" />
        <div className={scss.data__box}>
          <button className={scss.data__btn} type="submit" onClick={toggleModal}>
            <svg className={scss.data__camera} width="18" height="18">
              <use href={sprite + '#icon-profilePhotoCamera'} />
            </svg>
            Edit photo
          </button>
        </div>
      </div>
      <UserDataItem />
      {isModalOpen && (
        <Modal onCloseModal={closeModal} mode="dark">
          <UserAvatarModal onCloseModal={closeModal} onAvatarImg={avatarImg} />
        </Modal>
      )}
    </div>
  );
};

export default UserData;
