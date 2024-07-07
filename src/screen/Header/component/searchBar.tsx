import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../css/searchBar.css';
import CustomizedMenus from '../../Common/component/menu';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearch = () => {
    // Handle the search logic here
    console.log(`Searching for ${query} in category ${category}`);
  };

  return (
    <div className="search-container">
        <CustomizedMenus/>
      {/* <div className="dropdown-container">
        <select 
          className="search-dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home & Kitchen</option>
          <option value="books">Books</option>
        </select>
      </div> */}
      <input 
        type="text"
        className="search-input"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton aria-label="search" onClick={handleSearch}>
        <SearchIcon color="primary" />
      </IconButton>
    </div>
  );
};

export default SearchBar;
