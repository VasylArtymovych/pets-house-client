import { ModalAddsPetSellFirstPage } from './ModalAddsPetSellFirstPage';
import { ModalAddsPetSellSecondPage } from './ModalAddsPetSellSecondPage';
import React, { useState } from 'react';

export const ModalAddsPetSell = (props) => {
   console.log("propsModalAddPet:", props)
    const [data, setData] = useState({
    tittleOfAd: "", 
    namePet: '',
    birthDate: '',
    breed: '',
    locations: "",
    price: "",
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
    <ModalAddsPetSellFirstPage closeModal={props.onCloseModal} next={handleNextStep} data={data} title={formTitles[page]} />,
    <ModalAddsPetSellSecondPage prev={handlePrevStep} closeModal={props.onCloseModal} next={handleNextStep} data={data} title={formTitles[page]} />
  ];
  // console.log('data', data);
  return <>{steps[page]}</>;
};