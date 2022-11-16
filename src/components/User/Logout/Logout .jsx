import scss from './Logout.module.scss';
import sprite from '../../../images/symbol-defs.svg';
import { useModal } from 'hooks';
import Modal from 'components/Modal';
import { LogOutModal } from './LogOutModal';

export const Logout = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();
  return (
    <div className={scss.logout}>
      <button className={scss.logout__btn} type="submit" onClick={toggleModal}>
        <svg className={scss.logaut__svg} width="18" height="18">
          <use href={sprite + '#icon-LogOut'} />
        </svg>
        Log Out
      </button>
      {isModalOpen && (
        <Modal onCloseModal={closeModal} mode="dark">
          <LogOutModal onCloseModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};
