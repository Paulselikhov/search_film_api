import React from 'react';
import classes from './FilmDescriptions.module.scss';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FilmSimilar from '../UI/FilmSimilar/FilmSimilar';
import { FETCH_SERIALS_SUCCESS } from '../../store/reducers/searchReducer';
import { GET_FILM_ID } from '../../store/reducers/searchReducer';
import { getSimilars } from '../../store/action-creators/getSimilars';


const FilmDescriptions = () => {

  const dispatch = useDispatch()


  const state = useSelector ( state => state.searchReducer)
  const index = state.film_id;
  const item = state.items

  async function changeToSimilar(similar_index, item){
    dispatch(getSimilars(item))
    dispatch({type: GET_FILM_ID, payload: similar_index})
    dispatch({type: FETCH_SERIALS_SUCCESS, payload: state.similars})
    console.log('working...')
  }

  return (
    <div className={classes.film}>
      <div className={classes.film_main} style = { {background: `url(${item[index].coverUrl}) 200px 0/cover no-repeat`}}> 
        <div className={classes.main_shadow}> {/* Тут будет тень  */}
          <div className={classes.main_content} > {/* Блок с описанием */}
            <div>
              <div className={classes.content_title}>{item[index].nameRu}</div>
              <div className={classes.main_children}>
                <span>IMDb {item[index].ratingImdb}</span>
                <span>Кинопоиск {item[index].ratingKinopoisk}</span>
                <span>{item[index].genres[0].genre}&nbsp;&nbsp;&nbsp;|</span>
                <span>&nbsp;&nbsp;&nbsp;{item[index].type}&nbsp;&nbsp;&nbsp;|</span>
                <span>&nbsp;&nbsp;&nbsp;{item[index].year}</span>
              </div>
            </div>

            <div>
              <div className={classes.main_watch}>
                <a target="_blank" href={item[index].trailer}>Watch</a>
              </div>
              <div className={classes.main_slogan}>{item[index].slogan}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={classes.film_description}>
        <p>Смотри {item[index].nameRu} на Richbee Shows</p>
        <p>{item[index].description}</p>
        <div className={classes.description_similars}>
          <div className={classes.similars_title}>Также может понравиться</div>
          <div className={classes.similars__list}>
            {state.similars.map( (item, index) => 
              <FilmSimilar onClick={ (e) => 
                changeToSimilar(item.key, item)} index={index} key={index}/>
              )}
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default FilmDescriptions