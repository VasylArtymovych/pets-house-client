import Modal from 'components/Modal';
import Logout from 'components/User/Logout';
import PetsData from 'components/User/PetsData';
import UserData from 'components/User/UserData';
import { useModal } from 'hooks';

import sprite from '../../images/symbol-defs.svg';

import scss from './UserPage.module.scss';

const UserPage = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();
  return (
    <section className={scss.user__contsiner}>
      <div className={scss.container}>
        <div className={scss.user__box}>
          <div>
            <h1 className={scss.user__title}>My information:</h1>
            <div className={scss.user__info}>
              <UserData />
              <Logout />
            </div>
          </div>
          <div>
            <h2 className={scss.user__pets}>My Pets:</h2>
            <PetsData />
          </div>
          <div className={scss.pats__add}>
            <p className={scss.addpats__title}>Add pet</p>
            <button className={scss.addpats__btm} type="button" onClick={toggleModal}>
              <svg className={scss.addpats__svg}>
                <use href={sprite + '#icon-plus'} />
              </svg>
            </button>
            {isModalOpen && <Modal onCloseModal={closeModal}></Modal>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
