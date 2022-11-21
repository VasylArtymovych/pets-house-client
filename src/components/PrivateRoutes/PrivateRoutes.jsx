import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectors } from 'redux/selectors';

export default function PrivateRoutes() {
  const { getToken } = selectors;
  const token = useSelector(getToken);
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to="/login" state={{ location }} replace />;
}
