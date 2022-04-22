import React from 'react';
import classes from './Search.module.scss';
import SearchInput from './SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSerials } from '../../../store/action-creators/fetchSerials';
import SearchButton from './SearchButton';


const Search_Input_Button = () => {

    const showInput = useSelector( state => state.inputReducer)

    const dispatch = useDispatch()
  
    async function getDispatch(e){
      dispatch(fetchSerials(showInput.inputValue, e))
    }
  return (
    <div className={classes.search}>
        <SearchInput onChange = { (e) => dispatch({type: "SET_INPUT", payload: e.target.value })}
        />
        <SearchButton onClick={ (e) => {
          console.log(e)
          getDispatch(e)
          
          
          }}/>
            
    </div>
  )
}

export default Search_Input_Button