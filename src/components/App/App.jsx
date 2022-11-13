import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
// import FindPet from 'pages/FindPet';
// import Login from 'pages/Login';
// import News from 'pages/News';
// import OurFriend from 'pages/OurFriend';

// const linkPage = [
//   { to: '/news', page: <News /> },
//   { to: '/notices', page: <FindPet /> },
//   { to: '/friends', page: <OurFriend /> },
//   { to: '/login', page: <Login /> },
//   { to: '/register', page: <Register /> }
// ];
const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const UserPage = lazy(() => import('pages/UserPage'));
const FindPet = lazy(() => import('pages/FindPet'));
const Login = lazy(() => import('pages/Login'));
const News = lazy(() => import('pages/News'));
const OurFriend = lazy(() => import('pages/OurFriend'));

function App() {
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
            {/* {linkPage.map((el) => (
              <Route key={Math.random()} path={el.to} element={el.page} />
            ))} */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
