import styles from './NoticeCategoryItem.module.scss';
import sprite from '../../../images/symbol-defs.svg';
// import * as dayjs from 'dayjs';

const NoticeCategoryItem = ({ _id, category, imageUrl, title, breed, place, age, price, favorite, myads }) => {
  const normilizeCategory = (category) => {
    switch (category) {
      case 'sell':
        return 'Sell';
      case 'lost':
        return 'Lost';
      case 'found':
        return 'Found';
      case 'inGoodHands':
        return 'In good hands';
      default:
        return;
    }
  };

  // const dogAge = (age) => {
  //   // const now = new Date();
  //   const dog = dayjs(age);
  //   console.log(dog);
  // };

  return (
    <>
      <li key={_id} className={styles.NoticeCategoryItem}>
        <img src={imageUrl} alt="" className={styles.NoticeCategoryItem__img} />
        <p className={styles.NoticeCategoryItem__category}>{normilizeCategory(category)}</p>
        {favorite ? (
          <button className={styles.NoticeCategoryItem__heartbutton} type="button">
            <svg className={styles.NoticeCategoryItem__svg}>
              <use href={sprite + '#icon-heartFull'} />
            </svg>
          </button>
        ) : (
          <button className={styles.NoticeCategoryItem__heartbutton} type="button">
            <svg className={styles.NoticeCategoryItem__svg}>
              <use href={sprite + '#icon-heartEmpty'} />
            </svg>
          </button>
        )}
        {myads && (
          <button className={styles.NoticeCategoryItem__deletebutton} type="button">
            <svg className={styles.NoticeCategoryItem__svgdelete}>
              <use href={sprite + '#icon-remov-pets'} />
            </svg>
          </button>
        )}
        <div className={styles.NoticeCategoryItem__infoContainer}>
          <h3 className={styles.NoticeCategoryItem__title}>{title}</h3>
          <div className={`${styles.NoticeCategoryItem__textContainer} ${styles.sell}`}>
            <ul className={styles.NoticeCategoryItem__textListKeys}>
              <li className={styles.NoticeCategoryItem__textItem}>
                <p>Breed:</p>
              </li>
              <li className={styles.NoticeCategoryItem__textItem}>
                <p>Place:</p>
              </li>
              <li className={styles.NoticeCategoryItem__textItem}>
                <p>Age:</p>
              </li>
              {category === 'sell' && (
                <li className={styles.NoticeCategoryItem__textItem}>
                  <p>Price:</p>
                </li>
              )}
            </ul>
            <ul className={styles.NoticeCategoryItem__textListValues}>
              <li className={styles.NoticeCategoryItem__textItem}>
                <span className={styles.NoticeCategoryItem__textItemspan}>{breed}</span>
              </li>
              <li className={styles.NoticeCategoryItem__textItem}>
                <span className={styles.NoticeCategoryItem__textItemspan}>{place}</span>
              </li>
              <li className={styles.NoticeCategoryItem__textItem}>
                <span className={styles.NoticeCategoryItem__textItemspan}>{age}</span>
              </li>
              {category === 'sell' && (
                <li className={styles.NoticeCategoryItem__textItem}>
                  <span className={styles.NoticeCategoryItem__textItemspan}>{price}$</span>
                </li>
              )}
            </ul>
          </div>

          <button type="button" className={styles.NoticeCategoryItem__LearnMoreButton}>
            <span className={styles.NoticeCategoryItem__LearnMoreButtonText}>Learn more</span>
          </button>
        </div>
      </li>
    </>
  );
};

export default NoticeCategoryItem;
