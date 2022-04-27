import React from 'react';
import classes from './FilmHeader.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FETCH_SERIALS_SUCCESS, FETCH_SIMILARS_SUCCESS } from '../../../store/reducers/searchReducer';


const FilmHeader = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function goToMain(){
    dispatch({type: FETCH_SERIALS_SUCCESS, payload: null})
    dispatch({type: FETCH_SIMILARS_SUCCESS, payload: null})
    navigate("../search_film_api/")
  }
  return (
    <div onClick={goToMain} className={classes.header}>
            <div className={classes.text}>Richbee Shows</div>
    </div>
  )
}

export default FilmHeader