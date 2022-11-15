import styles from './NoticeCategoryItem.module.scss';
import sprite from '../../../images/symbol-defs.svg';

const NoticeCategoryItem = ({ data }) => {
  return (
    <>
      {data.map(({ id, category, imageUrl, title, breed, place, Age, favorite, myads }) => {
        return (
          <li key={id} className={styles.NoticeCategoryItem}>
            <img src={imageUrl} alt="" className={styles.NoticeCategoryItem__img} />
            <p className={styles.NoticeCategoryItem__category}>{category}</p>
            <button className={styles.NoticeCategoryItem__heartbutton} type="button">
              <svg className={styles.NoticeCategoryItem__svg}>
                <use href={sprite + '#icon-heartEmpty'} />
              </svg>
            </button>
            <div className={styles.NoticeCategoryItem__infoContainer}>
              <h3 className={styles.NoticeCategoryItem__title}>{title}</h3>
              <div className={styles.NoticeCategoryItem__textContainer}>
                <ul className={styles.NoticeCategoryItem__textListKeys}>
                  <li className={styles.NoticeCategoryItem__textItem}>
                    <p>Breed:</p>
                  </li>
                  <li className={styles.NoticeCategoryItem__textItem}>
                    <p>place:</p>
                  </li>
                  <li className={styles.NoticeCategoryItem__textItem}>
                    <p>Age:</p>
                  </li>
                </ul>
                <ul className={styles.NoticeCategoryItem__textListValues}>
                  <li className={styles.NoticeCategoryItem__textItem}>
                    <span className={styles.NoticeCategoryItem__textItemspan}>{breed}</span>
                  </li>
                  <li className={styles.NoticeCategoryItem__textItem}>
                    <span className={styles.NoticeCategoryItem__textItemspan}>{place}</span>
                  </li>
                  <li className={styles.NoticeCategoryItem__textItem}>
                    <span className={styles.NoticeCategoryItem__textItemspan}>{Age}</span>
                  </li>
                </ul>
              </div>

              <button type="button" className={styles.NoticeCategoryItem__LearnMoreButton}>
                <span className={styles.NoticeCategoryItem__LearnMoreButtonText}>Learn more</span>
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default NoticeCategoryItem;
