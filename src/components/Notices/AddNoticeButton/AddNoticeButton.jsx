import React from 'react';
import { useSelector } from 'react-redux';
import styles from './AddNoticeButton.module.scss';
import { useModal } from 'hooks';
import Modal from 'components/Modal';
import { toast } from 'react-toastify';
import sprite from '../../../images/symbol-defs.svg';
import { ModalAddsPetSell } from 'components/ModalAddsPetSell';
import { useTranslation } from 'react-i18next';

const AddNoticeButton = () => {
  const { t } = useTranslation();
  const isLogged = useSelector((state) => state.users.isLogged);
  console.log(isLogged);
  const { isModalOpen, closeModal, toggleModal } = useModal();

  const buttonSwitch = () => {
    if (isLogged) {
      toggleModal();
      return;
    } else {
      toast.warn(`You don't ask in respect or friendship. And you don't think to call me Godfather. To get started, you would do well to login. `);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal onCloseModal={closeModal} mode="dark">
          {<ModalAddsPetSell onCloseModal={closeModal} />}
        </Modal>
      )}
      <div className={styles.AddNoticeButton__container}>
        <span className={styles.AddNoticeButton__span}>{t('Add')}</span>
        <span className={styles.AddNoticeButton__span}>&nbsp;{t('pet')}</span>
        <button type="button" className={styles.AddNoticeButton__button} onClick={buttonSwitch}>
          <svg className={styles.AddNoticeButton__svg}>
            <use href={sprite + '#icon-plus'} />
          </svg>
        </button>
      </div>
    </>
  );
};

export default AddNoticeButton;
