import { NavLink } from 'react-router-dom';
import styles from './NoticesCategoriesNav.module.scss';
import sprite from '../../../images/symbol-defs.svg';

const NoticesCategoriesNav = () => {
  return (
    <div className={styles.NoticesCategoriesNav__Container}>
      <ul className={styles.NoticesCategoriesNav__List}>
        <li className={styles.NoticesCategoriesNav__Item}>
          <button type="button" className={styles.NoticesCategoriesNav__Button}>
            <NavLink to="/notices/lost-found">Lost/Found</NavLink>
          </button>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <button type="button" className={styles.NoticesCategoriesNav__Button}>
            <NavLink to="/notices/for-free">In good hands</NavLink>
          </button>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <button type="button" className={styles.NoticesCategoriesNav__Button}>
            <NavLink to="/notices/sell">Sell</NavLink>
          </button>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <button type="button" className={styles.NoticesCategoriesNav__Button}>
            <NavLink to="/notices/favorite">Favorite ads</NavLink>
          </button>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <button type="button" className={styles.NoticesCategoriesNav__Button}>
            <NavLink to="/notices/own">My ads</NavLink>
          </button>
        </li>
      </ul>
      {/* 
      <div className={styles.NoticesCategoriesNav__AddButtonContainer}>
        <span className={styles.NoticesCategoriesNav__AddButtonSpan}>Add</span>
        <span className={styles.NoticesCategoriesNav__AddButtonSpan}>&nbsp;pet</span>
        <button type="button" className={styles.NoticesCategoriesNav__AddButton}>
          <svg className={styles.NoticesCategoriesItem__svg}>
            <use href={sprite + '#icon-plus'} />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default NoticesCategoriesNav;
