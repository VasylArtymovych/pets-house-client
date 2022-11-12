import UserDataItem from '../UserDataItem';
import scss from './UserData.module.scss';

const UserData = () => {
  return (
    <div className={scss.data_container}>
      <div className={scss.avatar_container}>
        {/* <img className={scss.data_img} src={Avatar} alt="Avatar" width="233" height="233" /> */}
        <div className={scss.data_box}>
          {/* <img src={camera} alt="camera" /> */}
          <p className={scss.data_text}>Edit photo</p>
        </div>
      </div>
      <UserDataItem />
    </div>
  );
};

export default UserData;
