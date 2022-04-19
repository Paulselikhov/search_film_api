import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import SearchList from './../components/SearchList';
import { fetchSerials } from './../store/action-creators/fetchSerials';
import "./../styles/nullstyle.css";
import "./../styles/Main.css";
import Title from '../components/Title';
import Search from '../components/UI/Search';


const Main = () => {
    
    return (
      <div className="Main">
        <div className="Content">
          <Title/>
          <Search/>
          <SearchList/>
        </div>
      </div>
    );
  }

export default Main