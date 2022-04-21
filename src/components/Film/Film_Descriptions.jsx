import React from 'react';
import classes from './Film_Descriptions.module.scss';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Film_Similar from '../UI/Film_Similar/Film_Similar';
import { FETCH_SERIALS_SUCCESS } from '../../store/reducers/searchReducer';
import { GET_FILM_ID } from './../../store/reducers/searchReducer';
import { getSimilars } from './../../store/action-creators/getSimilars';


const Film_Descriptions = () => {

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
    <div className={classes.Film_descriptions}>

      <div className={classes.title} style = { {background: `url(${item[index].coverUrl}) 130px 0/cover no-repeat`}}> {/* Тут будет изображение */}
        <div className={classes.black}> {/* Тут будет тень  */}
          <div className={classes.main} > {/* Блок с описанием */}
            <div className={classes.main_title}>{item[index].title}</div>
            <div className={classes.main_children}>
              <span>IMDb {item[index].ratingImdb}</span>
              <span>{item[index].genres[0].genre}&nbsp;&nbsp;&nbsp;|</span>
              <span>&nbsp;&nbsp;&nbsp;{item[index].type}&nbsp;&nbsp;&nbsp;|</span>
              <span>&nbsp;&nbsp;&nbsp;{item[index].year}</span>
            </div>
            <div className={classes.main_watch}>
              <a target="_blank" href={item[index].trailer}>Watch</a>
            </div>
            <div className={classes.main_awards}>{item[index].slogan}</div>
          </div>
        </div>
      </div>
      
      <div className={classes.description}>
        <p>Watch {item[index].title} on Richbee Shows</p>
        <p>{item[index].description}</p>
        <div className={classes.similars}>
          <div className={classes.similars_title}>You may also like</div>
          <div className={classes.similars__list}>
            {state.similars.map( (item, index) => 
              <Film_Similar onClick={ () => changeToSimilar(item.key, item)} index={index} key={index}/>
              )}
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Film_Descriptions