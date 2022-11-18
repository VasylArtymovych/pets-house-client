import React from 'react';

const AddNoticeButton = () => {
  return (
    <div>
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
