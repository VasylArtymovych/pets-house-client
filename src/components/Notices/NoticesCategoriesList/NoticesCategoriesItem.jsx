import styles from './NoticesCategoriesItem.module.scss';
import sprite from '../../../images/symbol-defs.svg';

const NoticesCategoriesItem = ({ data }) => {
  return (
    <>
      {data.map(({ id, category, img, title, breed, Place, Age, favorite, myads }) => {
        return (
          <li key={id} className={styles.NoticesCategoriesItem}>
            <img src={img} alt="" className={styles.NoticesCategoriesItem__img} />
            <p className={styles.NoticesCategoriesItem__category}>{category}</p>
            <button className={styles.NoticesCategoriesItem__heartbutton} type="button">
              <svg className={styles.NoticesCategoriesItem__svg}>
                <use href={sprite + '#icon-heartEmpty'} />
              </svg>
            </button>
            <button className={styles.NoticesCategoriesItem__deletebutton} type="button">
              <svg className={styles.NoticesCategoriesItem__svg}>
                <use href={sprite + '#icon-remov-pets'} />
              </svg>
            </button>
            <div className={styles.NoticesCategoriesItem__infoContainer}>
              <h3 className={styles.NoticesCategoriesItem__title}>{title}</h3>
              <div className={styles.NoticesCategoriesItem__textContainer}>
                <ul className={styles.NoticesCategoriesItem__textListKeys}>
                  <li className={styles.NoticesCategoriesItem__textItem}>
                    <p>Breed:</p>
                  </li>
                  <li className={styles.NoticesCategoriesItem__textItem}>
                    <p>Place:</p>
                  </li>
                  <li className={styles.NoticesCategoriesItem__textItem}>
                    <p>Age:</p>
                  </li>
                </ul>
                <ul className={styles.NoticesCategoriesItem__textListValues}>
                  <li className={styles.NoticesCategoriesItem__textItem}>
                    <span className={styles.NoticesCategoriesItem__textItemspan}>{breed}</span>
                  </li>
                  <li className={styles.NoticesCategoriesItem__textItem}>
                    <span className={styles.NoticesCategoriesItem__textItemspan}>{Place}</span>
                  </li>
                  <li className={styles.NoticesCategoriesItem__textItem}>
                    <span className={styles.NoticesCategoriesItem__textItemspan}>{Age}</span>
                  </li>
                </ul>
              </div>

              <button type="button" className={styles.NoticesCategoriesItem__LearnMoreButton}>
                <span className={styles.NoticesCategoriesItem__LearnMoreButtonText}>Learn more</span>
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default NoticesCategoriesItem;
