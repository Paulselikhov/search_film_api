import React from 'react'
import MainTitle from './../components/Main/MainTitle/MainTitle';
import SearchInputButton from '../components/UI/MainSearchInput/SearchInputButton';
import MainPostList from '../components/Main/MainPostList';
import "./../styles/nullstyle.css";
import classes from "./../styles/Main.module.scss";

const Main = () => {
    return (
      <div className={classes.Main}>
        <div>
          <div className={classes.main_Title}>
            <MainTitle/>
          </div>
            <SearchInputButton/> 
            <MainPostList/>
        </div>     
      </div>
    );
  }

export default Main