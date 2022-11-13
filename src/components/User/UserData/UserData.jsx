import UserDataItem from '../UserDataItem';
import scss from './UserData.module.scss';
import sprite from '../../../images/symbol-defs.svg';
import DefaultAvatar from '../../../images/desctop/DefaultAvatar.png';

const UserData = () => {
  return (
    <div className={scss.data__container}>
      <div className={scss.avatar__container}>
        <img className={scss.data__img} src={DefaultAvatar} alt="avatar" width="233" height="233" />
        <div className={scss.data__box}>
          <button className={scss.data__btn} type="submit">
            <svg className={scss.camera} width="18" height="18">
              <use href={sprite + '#icon-profilePhotoCamera'} />
            </svg>
            Edit photo
          </button>
        </div>
      </div>
      <UserDataItem />
    </div>
  );
};

export default UserData;
