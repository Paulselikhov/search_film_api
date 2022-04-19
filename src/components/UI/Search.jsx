import React from 'react';
import classes from './Search.module.scss';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSerials } from './../../store/action-creators/fetchSerials';


const Search = () => {

    const showInput = useSelector( state => state.inputReducer)

    const dispatch = useDispatch()
  
    function getDispatch(){
      dispatch(fetchSerials(showInput.inputValue))
    }
  return (
    <div className={classes.search}>
        <SearchInput onChange = { (e) => dispatch({type: "SET_INPUT", payload: e.target.value })}/>
        <SearchButton onClick={getDispatch}/>
            
    </div>
  )
}

export default Search