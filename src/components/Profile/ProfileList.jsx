import React from 'react';
import propTypes from 'prop-types';
import ProfileItem from './ProfileItem';
import style from './ProfileList.module.css';

const ProfileList = ({ users }) => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {users.map(user => (
          <li className={style.item} key={user.tag}>
            <ProfileItem
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;

ProfileList.prototype = {
  users: propTypes.arrayOf(
    propTypes.shape({
      tag: propTypes.string.isRequired,
    })
  ),
};
