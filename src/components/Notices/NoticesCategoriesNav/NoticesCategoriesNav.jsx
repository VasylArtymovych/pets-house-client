import { NavLink } from 'react-router-dom';
import styles from './NoticesCategoriesNav.module.scss';

const NoticesCategoriesNav = () => {
  return (
    <div className={styles.name}>
      <ul className={styles.NoticesCategoriesNav__List}>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/lost-found">
            <button>Lost/Found</button>
          </NavLink>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/for-free">
            <button>In good hands</button>
          </NavLink>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/sell">
            <button>Sell</button>
          </NavLink>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/favorite">
            <button>Favorite ads</button>
          </NavLink>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/own">
            <button>My ads</button>
          </NavLink>
        </li>
      </ul>
      <div className={styles.name1}>
        <button type="button">+</button>
      </div>
    </div>
  );
};

export default NoticesCategoriesNav;
