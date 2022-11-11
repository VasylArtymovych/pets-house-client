import { NavLink } from 'react-router-dom';

const CenterBlock = ({ styleProp, isOpen }) => {
  return (
    <div className={styleProp.stylesMenuBurger.centerBlock}>
      <NavLink to="/Login" className={styleProp.styleNavigation.buttonlinkMenuBurger} onClick={() => isOpen((prev) => !prev)}>
        <span>Login</span>
      </NavLink>
      <NavLink to="/Registration" className={styleProp.styleNavigation.buttonlinkMenuBurger} onClick={() => isOpen((prev) => !prev)}>
        <span>Registration</span>
      </NavLink>
    </div>
  );
};

export default CenterBlock;
