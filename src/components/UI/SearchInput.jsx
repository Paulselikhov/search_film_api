import React from 'react';
import classes from './SearchInput.module.css'

const SearchInput = ({...props}) => {
  return (
    <input className= {classes.searchInpt}  {...props} type = 'text'></input>
  )
}

export default SearchInput