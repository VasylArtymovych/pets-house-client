import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './NoticesCategoriesNav.module.scss';

const NoticesCategoriesNav = () => {
  const isLogged = useSelector((state) => state.users.isLogged);

  return (
    <div className={styles.name}>
      <ul className={styles.NoticesCategoriesNav__List}>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/sell">
            <button className={styles.button}>sell</button>
          </NavLink>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/lostFound">
            <button className={styles.button}>lost/found</button>
          </NavLink>
        </li>
        <li className={styles.NoticesCategoriesNav__Item}>
          <NavLink to="/notices/inGoodHands">
            <button className={styles.button}>in good hands</button>
          </NavLink>
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
    </div>
  );
};

export default NoticesCategoriesNav;
