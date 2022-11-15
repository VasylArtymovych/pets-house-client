import { useModal } from 'hooks';
import Modal from 'components/Modal';
import { ModalAddsPet } from 'components/ModalAddsPet';
// import { ModalAddsPetSell } from 'components/ModalAddsPetSell';

function Home() {
  const { isModalOpen, closeModal, toggleModal } = useModal();

  return (
    <div>
      {isModalOpen && (
        <Modal onCloseModal={closeModal} mode="dark">
          <ModalAddsPet onCloseModal={closeModal} />
          {/* <ModalAddsPetSell onCloseModal={closeModal } /> */}
        </Modal>
      )}
      Home pages
      <button type="button" onClick={toggleModal} style={{ width: 40, height: 40, backgroundColor: 'blue' }}></button>
    </div>
  );
}

export default Home;
