import styles from './NoticesCategoriesList.module.scss';
import NoticesCategoriesItem from './NoticesCategoriesItem';

const NoticesCategoriesList = ({ data }) => {
  return (
    <div className={styles.NoticesCategoriesList__Container}>
      <ul className={styles.NoticesCategoriesList}>
        <NoticesCategoriesItem data={data} />
      </ul>
    </div>
  );
};

export default NoticesCategoriesList;
