import { useModal } from 'hooks';
import Modal from 'components/Modal';
// import { ModalAddsPetFirstPage } from 'components/ModalAddsPet';
// import { ModalAddsPetSecondPage } from 'components/ModalAddsPet';
import { ModalAddsPet } from 'components/ModalAddsPet';

function Home() {
  const { isModalOpen, closeModal, toggleModal } = useModal();

  return (
    <div>
      {isModalOpen && (
        <Modal onCloseModal={closeModal} mode="dark">
          <ModalAddsPet />
          {/* <ModalAddsPetFirstPage /> */}
          {/* <ModalAddsPetSecondPage /> */}
        </Modal>
      )}
      Home pages
      <button type="button" onClick={toggleModal} style={{ width: 40, height: 40, backgroundColor: 'blue' }}></button>
    </div>
  );
}

export default Home;
