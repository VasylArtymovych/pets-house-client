import FriendInfo from '../../data/sponsors.json';
import { OurFriend } from 'components/OurFriendsPage/OurFriend'

export default function OurFriendPage ( ) {
    return (
        <OurFriend info={FriendInfo}/>
    )
}