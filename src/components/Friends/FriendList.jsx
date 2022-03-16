import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <div className={style.friendsContainer}>
      <ul className={style.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

PropTypes.FriendList = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
