import React from 'react';
import classes from './SearchInput.module.scss'

const SearchInput = ({...props}) => {
  return (
    <div className= {classes.searchInpt}>
      <input   {...props} type = 'text'></input>
    </div>
    
  )
}

export default SearchInput