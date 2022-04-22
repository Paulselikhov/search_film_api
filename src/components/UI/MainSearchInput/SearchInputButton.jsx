import React from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSerials } from '../../../store/action-creators/fetchSerials';
import classes from './Search.module.scss';



const SearchInputButton = () => {

    const showInput = useSelector( state => state.inputReducer)

    const dispatch = useDispatch()
  
    async function getDispatch(e){
      dispatch(fetchSerials(showInput.inputValue, e))
    }
  return (
    <div className={classes.search}>
        <SearchInput onChange = { (e) => dispatch({type: "SET_INPUT", payload: e.target.value })}/>
        <SearchButton onClick={ (e) => getDispatch(e)}/>  
    </div>
  )
}

export default SearchInputButton