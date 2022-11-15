import styles from './NoticesCategoriesList.module.scss';
import NoticesCategoriesItem from './NoticesCategoriesItem';
import findpet from '../../../data/findpet.json';

const NoticesCategoriesList = () => {
  // const data = findpet;
  // console.log(data);
  return (
    <div className={styles.NoticesCategoriesList__Container}>
      <ul className={styles.NoticesCategoriesList}>
        <NoticesCategoriesItem data={findpet} />
      </ul>
    </div>
  );
};

export default NoticesCategoriesList;
