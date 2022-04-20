import React from 'react';
import classes from './Film_descriptions.module.scss';
import { useLocation } from 'react-router-dom';
import Similar from './UI/Similar/Similar';
import { useSelector } from 'react-redux';

const Film_descriptions = () => {

  const navigator_state = useLocation();

  const state = useSelector ( state => state.searchReducer)
    
 
  return (
    <div className={classes.Film_descriptions}>
      <div className={classes.title} style = { {background: `url(${navigator_state.state.coverUrl}) 130px 0/cover no-repeat`}}> {/* Тут будет изображение */}
      <div className={classes.black}> {/* Тут будет тень  */}
        <div className={classes.main} > {/* Блок с описанием */}
          <div className={classes.main_title}>{navigator_state.state.title}</div>
          <div className={classes.main_children}>
            <span>IMDb {navigator_state.state.ratingImdb}</span>
            <span>{navigator_state.state.genres[0].genre}&nbsp;&nbsp;&nbsp;|</span>
            <span>&nbsp;&nbsp;&nbsp;{navigator_state.state.type}&nbsp;&nbsp;&nbsp;|</span>
            <span>&nbsp;&nbsp;&nbsp;{navigator_state.state.year}</span>
          </div>
          <div className={classes.main_watch}>
          <a target="_blank" href={navigator_state.state.trailer}>Watch</a>
        </div>
        <div className={classes.main_awards}>{navigator_state.state.slogan}</div>
        </div>
      </div>
    </div>
    <div className={classes.description}>
      <p>Watch {navigator_state.state.title} on Richbee Shows</p>
      <p>{navigator_state.state.description}</p>

      <div className={classes.similars}>
        <div className={classes.similars_title}>You may also like</div>
        <div className={classes.similars__list}>
          {state.similars.map( (item, index) => 
          <Similar index={index} key={index}/>
          )}
        </div>
    </div>
      
    </div>
    

    </div>
   
  )
}

export default Film_descriptions