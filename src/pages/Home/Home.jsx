import scss from './Home.module.scss';
import woman from '../../images/desctop/womanAndDog.png';
import heart from '../../images/desctop/heart.png';
import Container from 'components/Container';

function Home() {
  return (
    <div className={scss.home__container}>
      <Container>
        <h1 className={scss.home__title}>
          <span>Take good care of</span>
          <br />
          <span>your small pets</span>
        </h1>
        <img src={woman} alt="woman" className={scss.home__woman} />
        <img src={heart} alt="heart" className={scss.home__heart} />
      </Container>
    </div>
  );
}

export default Home;
