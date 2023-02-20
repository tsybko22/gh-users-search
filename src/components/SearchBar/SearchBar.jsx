import { useState } from 'react';

import { IoSearch } from 'react-icons/io5';

import './SearchBar.css';

const SearchBar = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit}
    >
      <label className="search-bar__wrapper">
        <IoSearch className="search-bar__icon" />
        <input
          type="text"
          className="search-input"
          value={searchValue}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        className="btn"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
