import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import styleAnimation from './SharedLayout.module.scss';

function SharedLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer>
        <div className={styleAnimation.footerBicycle}></div>
        <p>
          &copy; <span className={styleAnimation.copyright}>2022 RapidTables.com</span>
        </p>
        <PetsIcon sx={{ fontSize: '15px', marginRight: '12px' }} />
      </Footer>
    </div>
  );
}

export default SharedLayout;
