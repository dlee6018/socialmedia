import React, {useState, useEffect} from 'react'
import './SearchPage.scss';
import UserList from '../components/UserList';
import Users from '../Users';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

  useEffect(()=> {
      const results = Users.filter((user) => user.name == searchTerm);setSearchResults(results)
  },  [searchTerm])

    return (
        <div className = 'search-page'>
            <input 
            className = "input"
            type = "text"
            placeholder = "Search"
            value = {searchTerm}
            onChange = {handleChange}
            />
            {searchResults.map((user)=> <UserList name = {user.name} image = {user.image} age = {user.age}/>)}
        </div>
    )
}

export default SearchPage
