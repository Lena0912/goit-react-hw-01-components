import css from './FriendList.module.css'
import PropTypes from 'prop-types'

import { FriendListItem } from "../FriendListItem/FriendListItem"
export const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>
        {friends.map((friend) =>
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                id={friend.id}
            />
        )}
  
</ul>
}

FriendList.proptype = {
    friends: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
}