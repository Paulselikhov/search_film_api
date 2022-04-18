import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from './../components/UI/SearchInput';
import SearchButton from './../components/UI/SearchButton';
import SearchList from './../components/SearchList';
import { fetchSerials } from './../store/action-creators/fetchSerials';
//import "./../styles/nullstyle.css";
import "./../styles/Main.css";


const Main = () => {
    const showInput = useSelector( state => state.inputReducer)

    const dispatch = useDispatch()
  
    function getDispatch(){
      dispatch(fetchSerials(showInput.inputValue))
    }
    return (
      <div className="Main">
        
        <div style = { {display: 'flex'}}>
          <SearchInput onChange = { (e) => dispatch({type: "SET_INPUT", payload: e.target.value })}/>
          <SearchButton onClick={getDispatch}/>
        </div>
          <SearchList/>
        
      </div>
    );
  }

export default Main