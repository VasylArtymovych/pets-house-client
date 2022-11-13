import { ModalAddsPetFirstPage } from './ModalAddsPetFirstPage';
import { ModalAddsPetSecondPage } from './ModalAddsPetSecondPage';
import React, { useState } from 'react';

export const ModalAddsPet = () => {

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
    <ModalAddsPetFirstPage next={handleNextStep} data={data} title={formTitles[page]} />,
    <ModalAddsPetSecondPage prev={handlePrevStep} next={handleNextStep} data={data} title={formTitles[page]} />
  ];

  console.log('data', data);

  return <>{steps[page]}</>;
};
