import React from 'react';
import classes from './SearchButton.module.css'

const SearchButton = () => {
  return (
    <div className = {classes.searchBtn}>
        <input type = 'text'></input>
        <button>Search</button>
    </div>
  )
}

export default SearchButton