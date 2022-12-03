import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import styleAnimation from './SharedLayout.module.scss';
import Modal from 'components/Modal';
import Footer from 'components/Footer';
import TeamBord from 'components/TeamBord';
import { Header, Logo, Navigations } from 'components/Header';

function SharedLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header>
        <Logo />
        <Navigations />
      </Header>
      <Outlet />
      <Footer>
        <div className={styleAnimation.footerBicycle}></div>
        {/* <div className={styleAnimation.footerCar}></div> */}
        <div className={styleAnimation.wrapp}>
          <p>
            &copy; <span className={styleAnimation.copyright}>2022 From Zero To Hero</span>
          </p>
          <div className={styleAnimation.icon} onClick={() => setIsOpen((prev) => !prev)}>
            <PetsIcon sx={{ fontSize: '15px', marginRight: '12px' }} />
          </div>
        </div>

        {isOpen && (
          <Modal>
            <TeamBord isOpen={setIsOpen} />
          </Modal>
        )}
      </Footer>
    </div>
  );
}

export default SharedLayout;
