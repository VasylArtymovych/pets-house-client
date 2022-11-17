import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default SharedLayout;
