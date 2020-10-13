import React from 'react';
import Header from '../components/Header';
import UserList from '../components/UserList';
import Users from '../Users';
const HomePage = () => {
  return (
    <div>
      {Users.map((user)=> <UserList name = {user.name} age = {user.age} image = {user.image}/>)}
    </div>
  );
};

export default HomePage;
