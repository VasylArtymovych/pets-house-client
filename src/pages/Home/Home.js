import { useModal } from 'hooks';
import Modal from 'components/Modal';
function Home() {
  const { isModalOpen, closeModal, toggleModal } = useModal();

  return (
    <div>
      {isModalOpen && <Modal onCloseModal={closeModal} mode="dark" />}
      Home pages
      <button type="button" onClick={toggleModal} style={{ width: 40, height: 40, backgroundColor: 'blue' }}></button>
    </div>
  );
}

export default Home;
