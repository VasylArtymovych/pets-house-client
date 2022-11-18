import React from 'react';
import styles from './AddNoticeButton.module.scss';

const AddNoticeButton = () => {
  return (
    <div className={styles.container}>
      Add pat
      <button type="button"> + </button>
    </div>
  );
};

/* 
      <div className={styles.NoticesCategoriesNav__AddButtonContainer}>
        <span className={styles.NoticesCategoriesNav__AddButtonSpan}>Add</span>
        <span className={styles.NoticesCategoriesNav__AddButtonSpan}>&nbsp;pet</span>
        <button type="button" className={styles.NoticesCategoriesNav__AddButton}>
          <svg className={styles.NoticesCategoriesItem__svg}>
            <use href={sprite + '#icon-plus'} />
          </svg>
        </button>
      </div> */

export default AddNoticeButton;
