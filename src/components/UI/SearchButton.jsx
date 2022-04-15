import React from 'react';
import classes from './SearchButton.module.css'

const SearchButton = ({...props}) => {
  return (
        <button className= {classes.searchBtn} {...props}>Search</button>
  )
}

export default SearchButton