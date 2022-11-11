import Logout from 'components/User/Logout';
import PetsData from 'components/User/PetsData';
import UserData from 'components/User/UserData';
import scss from './UserPage.module.scss';

const UserPage = () => {
  return (
    <section className={scss.user_contsiner}>
      <div className={scss.container}>
        <div className={scss.box}>
          <h1 className={scss.user_title}>My information:</h1>
          <div className={scss.user_info}>
            <UserData />
            <Logout />
          </div>
        </div>
        <h2>My Pets:</h2>
        <PetsData />
      </div>
    </section>
  );
};

export default UserPage;
