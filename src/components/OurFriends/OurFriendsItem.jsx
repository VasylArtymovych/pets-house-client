import scss from "./FriendStyle.module.scss"

const FriendItem = ({url, title, img, address, addressUrl, email, phone, timework}) => {
    
   return  ( 
            <li  className={scss.friendItem}>
                <h3 className={scss.itemTitle}>{title}</h3>
                <img src={img} alt="Sponsor Logo" width="120px" className={scss.imgItem} />
                <div className={scss.infoItem}>
                    <ul className={scss.infoItemList}>
                       <li className={scss.infoItemWork}>
                           <button className={scss.infoItemTime}>Time:<br /></button>
                        </li> 
                        <li className={scss.infoItemAddress}>
                            <address >
                                <a href={addressUrl} >Address:<br/>{ address}</a>
                            </address>
                        </li>
                        <li className={scss.infoItemMail}>
                            <a href={`mailto:${email}`}
                            className={scss.friendItem}>Email:<br/>{ email}</a>
                        </li>
                        <li className={scss.infoItemPhone}>
                            <a href={`tel:${phone}`} className={scss.friendItem}>Phone:<br/>{ phone}</a>
                        </li>
                    </ul>
                </div>
            </li>
        )  
}

export default FriendItem;