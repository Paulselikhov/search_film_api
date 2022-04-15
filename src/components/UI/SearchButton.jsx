import React from 'react';
import classes from './SearchButton.module.css'

const SearchButton = ({...props}) => {
  return (
    <div className = {classes.searchBtn}>
        <input type = 'text'></input>
        <button {...props}>Search</button>
    </div>
  )
}

export default SearchButton