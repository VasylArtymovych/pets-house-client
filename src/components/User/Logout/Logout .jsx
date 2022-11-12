import scss from './Logout.module.scss';

const Logout = () => {
  return (
    <div className={scss.logout}>
      {/* <img src={logout} alt="logout" width="18" /> */}
      <button className={scss.logout_btn} type="submit">
        Log Out
      </button>
    </div>
  );
};

export default Logout;
