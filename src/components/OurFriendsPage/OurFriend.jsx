import { FriendItem } from "./FriendsItem";

export const OurFriend = ({ info }) => {
    return (
        <div>
            <h2>Our friends</h2>
            <ul>
                <FriendItem friend={info}/>
            </ul>
        </div>
    )
}