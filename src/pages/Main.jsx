import React from 'react'
import MainTitle from './../components/Main/MainTitle/MainTitle';
import SearchInputButton from '../components/UI/MainSearchInput/SearchInputButton';
import MainPostList from '../components/Main/MainPostList';
import "./../styles/nullstyle.css";
import "./../styles/Main.scss";

const Main = () => {
    
    return (
      <div className="Main">
          <div className="main_Title">
            <MainTitle/>
          </div>
            <SearchInputButton/> 
            <MainPostList/>
      </div>
    );
  }

export default Main