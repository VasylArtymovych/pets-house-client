import { ModalAddsPetFirstPage } from './ModalAddsPetFirstPage';
import { ModalAddsPetSecondPage } from './ModalAddsPetSecondPage';
import React, { useState } from 'react';

export const ModalAddsPet = (props) => {
  
  const [data, setData] = useState({
    namePet: '',
    birthDate: '',
    breed: '',
    photo: '',
    comments: ''
  });
  const [page, setPage] = useState(0);

  const formTitles = ['First Page', 'Second Page'];

  const makeRequest = (formData) => {
    console.log('Submiting', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    setPage((prev) => prev + 1);

    if (final) {
      makeRequest(newData);
      return;
    }
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setPage((prev) => prev - 1);
  };

  const steps = [
    <ModalAddsPetFirstPage closeModal={props.onCloseModal} next={handleNextStep} data={data} title={formTitles[page]} />,
    <ModalAddsPetSecondPage prev={handlePrevStep} closeModal={props.onCloseModal} next={handleNextStep} data={data} title={formTitles[page]} />
  ];
  // console.log('data', data);
  return <>{steps[page]}</>;
};




// import { useModal } from 'hooks';
// import Modal from 'components/Modal';
// import { ModalAddsPet } from 'components/ModalAddsPet';
// import { ModalAddsPetSell } from 'components/ModalAddsPetSell';

// function Home() {
//   const { isModalOpen, closeModal, toggleModal } = useModal();

//   return (
//     <div>
//       {isModalOpen && (
//         <Modal onCloseModal={closeModal} mode="dark">
//           {/* <ModalAddsPet onCloseModal={closeModal} /> */}
//           <ModalAddsPetSell onCloseModal={closeModal } />
//         </Modal>
//       )}
//       Home pages
//       <button type="button" onClick={toggleModal} style={{ width: 40, height: 40, backgroundColor: 'blue' }}></button>
//     </div>
//   );
// }

// export default Home;
