import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NoticesCategoriesNav.module.scss';

const NoticesCategoriesNav = () => {
  return (
    <div className={styles.name}>
      <ul className={styles.NoticesCategoriesNav__List}>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/sell">
            <button>sell</button>
          </NavLink>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/lostFound">
            <button>lost/found</button>
          </NavLink>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/inGoodHands">
            <button>in good hands</button>
          </NavLink>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/favorite">
            <button>favorite ads</button>
          </NavLink>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/own">
            <button>my ads</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
