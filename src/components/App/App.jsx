import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SharedLayout from 'components/SharedLayout';
import { useGetCurrentUserQuery } from 'redux/fetchUser';
import { selectors } from 'redux/selectors';
import Loader from 'components/Loader';
// import TeamBord from 'components/TeamBord';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const UserPage = lazy(() => import('pages/UserPage'));
const FindPet = lazy(() => import('pages/FindPet'));
const Login = lazy(() => import('pages/Login'));
const News = lazy(() => import('pages/News'));
const OurFriend = lazy(() => import('pages/OurFriend'));
const NoticesCategoriesList = lazy(() => import('components/Notices/NoticesCategoriesList'));

function App() {
  const { getToken } = selectors;
  const token = useSelector(getToken);
  // console.log(token);
  useGetCurrentUserQuery(undefined, { skip: !token });

  const [isBigLoader, setIsBigLoader] = useState(false);

  useEffect(() => {
    const witdthScren = document.querySelector('body').scrollWidth;
    if (witdthScren > 880) {
      setIsBigLoader(true);
    }
  }, [setIsBigLoader]);

  // console.log(isBigLoader);

  return (
    <>
      <ToastContainer autoClose={3000} closeOnClick={true} />
      <Suspense fallback={isBigLoader ? <Loader /> : <div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            {/* <Route index element={<TeamBord />} /> */}
            <Route path="/news" element={<News />} />
            <Route path="/notices" element={<FindPet />}>
              <Route index element={<NoticesCategoriesList />} />
              <Route path="lost-found" element={<NoticesCategoriesList />} />
              <Route path="for-free" element={<NoticesCategoriesList />} />
              <Route path="sell" element={<NoticesCategoriesList />} />
              <Route path="favorite" element={<NoticesCategoriesList />} />
              <Route path="own" element={<NoticesCategoriesList />} />
            </Route>
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
