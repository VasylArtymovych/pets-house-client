import styles from './NoticesCategoriesItem.module.scss';

const NoticesCategoriesItem = ({ data }) => {
  return (
    <>
      {data.map(({ id, category, img, title, breed, Place, Age, favorite, myads }) => {
        return (
          <li key={id} className={styles.NoticesCategoriesItem}>
            <img src={img} alt="" className={styles.NoticesCategoriesItem__img} />
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
