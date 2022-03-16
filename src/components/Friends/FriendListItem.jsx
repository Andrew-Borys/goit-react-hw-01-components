import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span
        className={style.isOnline}
        style={{ backgroundColor: isOnline ? '#6a6' : '#f77' }}
      ></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

PropTypes.FriendListItem = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
