import scss from './FriendStyle.module.scss';
import logo from '../../images/img_our_friend/logo-ru.png';

const FriendItem = ({ url, title, img, address, addressUrl, email, phone, timeWork }) => {
  return (
    <li className={scss.friendItem}>
      <h3 className={scss.itemTitle}>
        <a href={url}>{title}</a>
      </h3>
      <div className={scss.ItemNetwork}>
        {!img ? (
          <img src={logo} alt="Sponsor Logo" width="110px" className={scss.imgItem} />
        ) : (
          <img src={img} alt="Sponsor Logo" width="110px" className={scss.imgItem} />
        )}
        <div className={scss.infoItem}>
          <ul className={scss.infoItemUl}>
            <li className={scss.itemInfoList}>
              {timeWork ? (
                <button className={scss.infoItemTime}>
                  Time:
                  <br />
                  {timeWork[0].from}-{timeWork[0].to}
                </button>
              ) : (
                <p>
                  Time:
                  <br />
                  ------------
                </p>
              )}
            </li>
            <li className={`${scss.itemInfoList} ${scss.text}`}>
              {!address ? (
                <p>
                  Address:
                  <br />
                  ------------
                </p>
              ) : (
                <address className={scss.infoItemAddress}>
                  <a href={addressUrl}>
                    Address:
                    <br />
                    {address}
                  </a>
                </address>
              )}
            </li>
            <li className={`${scss.itemInfoList} ${scss.text}`}>
              {!email ? (
                <p>
                  Email:
                  <br />
                  ------------
                </p>
              ) : (
                <a href={`mailto:${email}`} className={scss.friendItemEmail}>
                  Email:
                  <br />
                  {email}
                </a>
              )}
            </li>
            <li className={`${scss.itemInfoList} ${scss.text}`}>
              {!phone ? (
                <p>
                  Phone:
                  <br />
                  ------------
                </p>
              ) : (
                <a href={`tel:${phone}`} className={scss.friendItemPhone}>
                  Phone:
                  <br />
                  {phone}
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default FriendItem;
