import { ModalAddsPetFirstPage } from './ModalAddsPetFirstPage';
import { ModalAddsPetSecondPage } from './ModalAddsPetSecondPage';
import React, { useState } from 'react';
import { usePostPetMutation } from '../../redux/fetchPets';
import { useTranslation } from 'react-i18next';

export const ModalAddsPet = (props) => {
  const { t } = useTranslation();
  const [data, setData] = useState({
    name: '',
    dateOfBirth: '',
    breed: '',
    // petImage: '',
    comments: ''
  });
  const [page, setPage] = useState(0);

  // const formTitles = ['First Page', 'Second Page'];

  const [addPets] = usePostPetMutation();

  const makeRequest = (formData) => {
    console.log('Submiting', formData);
    addPets(formData);
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
    <ModalAddsPetFirstPage closeModal={props.onCloseModal} next={handleNextStep} data={data} title={t('First Page')} />,
    <ModalAddsPetSecondPage prev={handlePrevStep} closeModal={props.onCloseModal} next={handleNextStep} data={data} title={t('Second Page')} />
  ];
  
  return <>{steps[page]}</>;
};

