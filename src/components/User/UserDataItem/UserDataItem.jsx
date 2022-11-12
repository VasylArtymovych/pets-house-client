import scss from './UserDataItem.module.scss';

const UserDataItem = () => {
  return (
    <>
      <ul className={scss.list}>
        <li className={scss.items}>
          <p>name:</p>
          <span className={scss.items_info}>Anna</span>
          <button type="button" className={scss.changebtn}>
            {/* <img src={changeInfo} alt="changeInfo" width="10" /> */}
          </button>
        </li>
        <li className={scss.items}>
          <p>Email:</p>
          <span className={scss.items_info}>anna00@gmail.com</span>
          <button type="button" className={scss.changebtn}>
            {/* <img src={changeInfo} alt="changeInfo" width="10" /> */}
          </button>
        </li>
        <li className={scss.items}>
          <p>Birthday:</p>
          <span className={scss.items_info}>00.00.0000</span>
          <button type="button" className={scss.changebtn}>
            {/* <img src={changeInfo} alt="changeInfo" width="10" /> */}
          </button>
        </li>
        <li className={scss.items}>
          <p>Phone:</p>
          <span className={scss.items_info}>+38000000000</span>
          <button type="button" className={scss.changebtn}>
            {/* <img src={changeInfo} alt="changeInfo" width="10" /> */}
          </button>
        </li>
        <li className={scss.items}>
          <p>City:</p>
          <span className={scss.items_info}>Kiev</span>
          <button type="button" className={scss.changebtn}>
            {/* <img src={changeInfo} alt="changeInfo" width="10" /> */}
          </button>
        </li>
      </ul>
    </>
  );
};

export default UserDataItem;
