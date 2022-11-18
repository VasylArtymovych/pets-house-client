import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import petsInfo from '../../../pages/FindPet/sellPets.json';
import React from 'react';
import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';
import styles from './NoticesCategoriesList.module.scss';

const NoticesCategoriesList = () => {
  const { pathname } = useLocation();

  const renderCategory = () => {
    switch (pathname) {
      case '/notices/sell':
        return 'sell';
      case '/notices/lost-found':
        return 'lostFound';
      case '/notices/inGoodHands':
        return 'inGoodHands';
      case '/notices/favorite':
        return 'favorite';
      case '/notices/own':
        return 'own';
      default:
        return 'sell';
    }
  };

  const category = renderCategory();

  const getCategoryData = async (category) => {
    const response = await axios.get(`${category}`);

    return response.data.results;
  };

  const [pets, setPets] = useState(null);

  useEffect(() => {
    async function fetchPets() {
      try {
        const results = await getCategoryData(category);
        setPets(results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchPets();
  }, [category]);
  console.log(pets);

  return (
    <div className={styles.NoticesCategoriesList__Container}>
      <ul className={styles.NoticesCategoriesList}>
        <NoticeCategoryItem data={petsInfo} />
      </ul>
    </div>
  );
};

export default NoticesCategoriesList;
