import SharedLayout from 'components/SharedLayout';
import s from './App.module.css';

function App() {
  return (
    <>
      <h1 className={s.title}>App component</h1>
      <p>Hello</p>
      <SharedLayout />
    </>
  );
}

export default App;
