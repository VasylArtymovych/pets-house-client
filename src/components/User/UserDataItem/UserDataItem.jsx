import scss from './UserDataItem.module.scss';

const UserDataItem = () => {
  return (
    <>
      <ul className={scss.list}>
        <li className={scss.items}>
          <p>name:</p>
          <span className={scss.items_info}>Anna</span>
          <botton className={scss.changebtn}>{/* <img src={changeInfo} alt="changeInfo" width="10" /> */}</botton>
        </li>
        <li className={scss.items}>
          <p>Email:</p>
          <span className={scss.items_info}>anna00@gmail.com</span>
          <botton className={scss.changebtn}>{/* <img src={changeInfo} alt="changeInfo" width="10" /> */}</botton>
        </li>
        <li className={scss.items}>
          <p>Birthday:</p>
          <span className={scss.items_info}>00.00.0000</span>
          <botton className={scss.changebtn}>{/* <img src={changeInfo} alt="changeInfo" width="10" /> */}</botton>
        </li>
        <li className={scss.items}>
          <p>Phone:</p>
          <span className={scss.items_info}>+38000000000</span>
          <botton className={scss.changebtn}>{/* <img src={changeInfo} alt="changeInfo" width="10" /> */}</botton>
        </li>
        <li className={scss.items}>
          <p>City:</p>
          <span className={scss.items_info}>Kiev</span>
          <botton className={scss.changebtn}>{/* <img src={changeInfo} alt="changeInfo" width="10" /> */}</botton>
        </li>
      </ul>
    </>
  );
};

export default UserDataItem;
