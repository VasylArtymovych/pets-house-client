import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SharedLayout from 'components/SharedLayout';
import {useGetCurrentUserQuery} from 'redux/fetchUser'
import { selectors } from 'redux/selectors';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const UserPage = lazy(() => import('pages/UserPage'));
const FindPet = lazy(() => import('pages/FindPet'));
const Login = lazy(() => import('pages/Login'));
const News = lazy(() => import('pages/News'));
const OurFriend = lazy(() => import('pages/OurFriend'));


function App() {
  const { getToken }=selectors;
  const token =useSelector(getToken);
  console.log(token)
  useGetCurrentUserQuery(undefined,{skip:!token});
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/notices" element={<FindPet />} />
            <Route path="/friends" element={<OurFriend />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<UserPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
