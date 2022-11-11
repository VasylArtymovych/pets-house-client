import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import FindPet from 'pages/FindPet';
import Login from 'pages/Login';
import Register from 'pages/Register';
import News from 'pages/News';
import OurFriend from 'pages/OurFriend';

const Home = lazy(() => import('pages/Home'));

const linkPage = [
  { to: '/news', page: <News /> },
  { to: '/notices', page: <FindPet /> },
  { to: '/friends', page: <OurFriend /> },
  { to: '/login', page: <Login /> },
  { to: '/register', page: <Register /> }
];

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            {linkPage.map((el) => (
              <Route key={Math.random()} path={el.to} element={el.page} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
