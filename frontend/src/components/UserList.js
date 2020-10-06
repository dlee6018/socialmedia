import React from 'react';
import Users from '../Users';
import './UserList.scss';
const UserList = () => {
  return (
    <div className='user-list'>
      {Users.map((user) => (
        <div className='user'>
          <img src={user.image} alt={user.name}></img>
          <h3>{user.name}</h3>
          <h3>{user.age}</h3>
        </div>
      ))}
    </div>
  );
};

export default UserList;
