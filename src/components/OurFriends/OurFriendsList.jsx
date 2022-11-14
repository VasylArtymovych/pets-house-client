import FriendItem  from "./OurFriendsItem";
import scss from "./FriendStyle.module.scss";

const OurFriendList = ({ info }) => {
    return(
        <div className={scss.container}>
            <h2 className={scss.title}>Our friends</h2>
            <ul className={scss.friendsList}>
                {info.map(({ url, title, imageUrl, address, addressUrl, email, phone, workDays }) => {
                    return (
                        <FriendItem
                            key={url}
                            url={url}
                            title={title}
                            img={imageUrl}
                            timeWork={workDays}
                            address={address}
                            addressUrl={addressUrl}
                            email={email}
                            phone={phone}
                        />
                    )
                }
                )
            }
            </ul>
        </div>
        )
}

export default OurFriendList;