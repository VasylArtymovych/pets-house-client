import styles from './NoticesCategoriesList.module.scss';
import NoticesCategoriesItem from './NoticesCategoriesItem';

const NoticesCategoriesList = ({ data }) => {
  return (
    <ul className={styles.NoticesCategoriesList}>
      <NoticesCategoriesItem data={data} />
    </ul>
  );
};

export default NoticesCategoriesList;
