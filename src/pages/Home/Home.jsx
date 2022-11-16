import scss from './Home.module.scss';
import woman from '../../images/desctop/womanAndDog.png';
import heart from '../../images/desctop/heart.png';
import Container from 'components/Container';

function Home() {
  return (
    <div className={scss.home__container}>
      <Container>
        <h1 className={scss.home__title}>Take good care of your small pets</h1>
        <img src={woman} alt="woman" className={scss.home__woman} />
        <img src={heart} alt="heart" className={scss.home__heart} />
      </Container>
    </div>
  );
}

export default Home;
