import { useModal } from 'hooks';
import scss from './ModalAddsPet.module.scss';

export const ModalAddsPetSecondPage = () => {
  const { closeModal } = useModal();
  return (
    <div className={scss.container}>
      <button type="button" onClick={closeModal} className={scss.btnClose}>+</button>
      <h3 className={scss.title}>Add pet</h3>
      <p className={scss.text}>Add photo and some comments</p>
      <button type="button" className={scss.btnAddPhoto}>
        +
      </button>
      <form className={scss.form}>
        <div className={scss.wrapTextarea}>
        <label className={scss.label}>
          Comments</label>
          <textarea className={scss.textarea} placeholder="Type comments"></textarea>
        </div>
        <div className={scss.btnWrap}>
          <button type="button" >Next</button>
          <button type="button">Cancel</button>
          </div>
      </form>
      
    </div>
  );
}

