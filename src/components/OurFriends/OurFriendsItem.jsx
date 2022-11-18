import { useState } from 'react';
import scss from './FriendStyle.module.scss';
import logo from '../../images/img_our_friend/logo-ru.png';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

const FriendItem = ({ url, title, img, address, addressUrl, email, phone, timeWork }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => { 
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

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
                <>
                <button className={scss.infoItemTime} aria-describedby={id} type="button" onClick={handleClick}>
                  Time:
                  <br />
                  {timeWork[0].from}-{timeWork[0].to}
                </button>
                  <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Box sx={{ border: 1,  bgcolor: 'background.paper' }} className={scss.popper}>
                      <ul className={scss.listWorkDay}>
                        {timeWork[0].isOpen ? <li className={scss.workDay}><span>MN</span> <span>{timeWork[0].from}-{timeWork[0].to}</span></li> : 
                        <li className={scss.workDay}><span>MN</span> <span>day off</span></li>}
                        {timeWork[1].isOpen ? <li className={scss.workDay}><span>TU</span> <span>{timeWork[1].from}-{timeWork[1].to}</span></li> : 
                        <li className={scss.workDay}><span>TU</span> <span>day off</span></li>}
                        {timeWork[2].isOpen ? <li className={scss.workDay}><span>WE</span> <span>{timeWork[2].from}-{timeWork[2].to}</span></li> : 
                        <li className={scss.workDay}><span>WE</span> <span>day off</span></li>}
                        {timeWork[3].isOpen ? <li className={scss.workDay}><span>TH</span> <span>{timeWork[3].from}-{timeWork[3].to}</span></li> : 
                        <li className={scss.workDay}><span>TH</span> <span>day off</span></li>}
                        {timeWork[4].isOpen ? <li className={scss.workDay}><span>FR</span> <span>{timeWork[4].from}-{timeWork[4].to}</span></li> : 
                        <li className={scss.workDay}><span>FR</span> <span>day off</span></li>}
                        {timeWork[5].isOpen ? <li className={scss.workDay}><span>SA</span> <span>{timeWork[5].from}-{timeWork[5].to}</span></li> : 
                        <li className={scss.workDay}><span>SA</span> <span>day off</span></li>}
                        {timeWork[6].isOpen ? <li className={scss.workDay}><span>SU</span> <span>{timeWork[6].from}-{timeWork[6].to}</span></li> : 
                        <li className={scss.workDay}><span>SU</span> <span>day off</span></li>}
                      </ul>
                    </Box>
                </Popper>
                </>
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
