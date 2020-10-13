import React from 'react';
import Users from '../Users';
import './UserList.scss';
const UserList = ({name, age, image}) => {
  return (
    <div className='user-list'>
        <div className='user'>
          <img src={image} alt={name}></img>
          <h3>{name}</h3>
          <h3>{age}</h3>
        </div>
    </div>
  );
};

export default UserList;
