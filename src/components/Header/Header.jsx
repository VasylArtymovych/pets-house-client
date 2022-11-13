import style from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <header className={style.topGap}>
      {/* <!-- Navbar --> */}
      <nav>
        <div className={style.navWrap}>{children}</div>
      </nav>
    </header>
  );
};

export default Header;
