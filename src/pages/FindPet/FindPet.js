import styles from './FindPet.module.scss';

export const FindPet = ({ data }, isUserLoggedIn) => {
  console.log(data);
  return (
    <>
      <div className={styles.filterPets}>
        <ul>
          <li>
            <a href="#">
              <button className={styles.findpet__filterButton}>sell</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button className={styles.findpet__filterButton}>lost/found</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button className={styles.findpet__filterButton}>In good hands</button>
            </a>
          </li>
          {isUserLoggedIn && (
            <li>
              <a href="#">
                <button className={styles.findpet__filterButton}>Favorite ads</button>
              </a>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <a href="#">
                <button className={styles.findpet__filterButton}>My ads</button>
              </a>
            </li>
          )}
        </ul>
        <button type="button">+</button>
      </div>
      <div className={styles.findpet__cardContainer}>
        <ul className={styles.findpet__cardList}>
          {data.map((item) => {
            return (
              <li key={item.id} className={styles.findpet__cardItem}>
                kyky
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FindPet;
