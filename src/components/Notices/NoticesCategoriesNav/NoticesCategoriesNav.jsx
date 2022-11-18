import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './NoticesCategoriesNav.module.scss';

const NoticesCategoriesNav = () => {
  const isLogged = useSelector((state) => state.users.isLogged);

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

        {isLogged ? (
          <>
            <li className={styles.NoticesCategoriesNav__Item}>
              <NavLink to="/notices/favorite">
                <button className={styles.button}>favorite ads</button>
              </NavLink>
            </li>
            <li className={styles.NoticesCategoriesNav__Item}>
              <NavLink to="/notices/own">
                <button className={styles.button}>my ads</button>
              </NavLink>
            </li>
          </>
        ) : null}
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
