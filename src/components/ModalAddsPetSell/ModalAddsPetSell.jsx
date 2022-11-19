import { ModalAddsPetSellFirstPage } from './ModalAddsPetSellFirstPage';
import { ModalAddsPetSellSecondPage } from './ModalAddsPetSellSecondPage';
import React, { useState } from 'react';
import { useAddNoticeMutation } from "../../redux/fetchNotice";

export const ModalAddsPetSell = (props) => {
   
    const [data, setData] = useState({
    title: "", 
    name: '',
    dateOfBirth: '',
    breed: '',
    location: "",
    price: "",
    petImage: '',
    comments: '',
    category: "", //sell, inGoodHands, lostFound
    sex: ""
  });
  const [page, setPage] = useState(0);

  const formTitles = ['First Page', 'Second Page'];

  const [addNotice] = useAddNoticeMutation();

  const makeRequest = (formData) => {
    console.log('Submiting', formData);
    addNotice(formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    setPage((prev) => prev + 1);

    if (final && page === 1) {
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