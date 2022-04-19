import React from 'react';
import classes from './SearchButton.module.scss'

const SearchButton = ({...props}) => {
  return (
        <button className= {classes.searchBtn} {...props}> <p>Search</p></button>
  )
}

export default SearchButton