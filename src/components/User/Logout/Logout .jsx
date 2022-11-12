import scss from './Logout.module.scss';
import sprite from '../../../images/symbol-defs.svg';

const Logout = () => {
  return (
    <div className={scss.logout}>
      <button className={scss.logout__btn} type="submit">
        <svg className={scss.logaut__svg} width="18" height="18">
          <use href={sprite + '#icon-LogOut'} />
        </svg>
        Log Out
      </button>
    </div>
  );
};

export default Logout;
