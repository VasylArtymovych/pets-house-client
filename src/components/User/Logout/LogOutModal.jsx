import Button from 'components/Button';
import CatInShrek from '../../../images/desctop/CatInShrek.png';
import scss from './LogOutModal.module.scss';

export const LogOutModal = ({ onCloseModal }) => {
  return (
    <div className={scss.modalOut__container}>
      <img src={CatInShrek} alt="Cat" className={scss.modalOut__img} />
      <p className={scss.modalOut__text}>Do you really want to Log Out of your account?</p>

      <div className={scss.modalOut__btns}>
        <Button type="submit" customStyle={scss.modalOut__btn} buttonName="LogOut" />
        <Button type="button" customStyle={scss.modalOut__btn} buttonName="Сancel" onClick={onCloseModal} />
      </div>
    </div>
  );
};
