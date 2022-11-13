import FriendInfo from '../../data/sponsors.json';
import { OurFriend } from 'components/OurFriendsPage/OurFriend'

function OurFriendPage ( ) {
    return (
        <OurFriend info={FriendInfo}/>
    )
}
export default OurFriendPage;