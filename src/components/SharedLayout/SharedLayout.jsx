import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import mainContainer from '../Header/container.module.scss';

function SharedLayout() {
  return (
    <div className={mainContainer.container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default SharedLayout;
