import React from 'react';
import classes from './Film_descriptions.module.scss';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Film_descriptions = () => {

  const showSerial = useLocation();
    console.dir(showSerial.state)

    const state = useSelector ( state => state.searchReducer)
 
  return (
    <div className={classes.Film_descriptions}>
      
      <div className={classes.title} style = { {background: `url(${showSerial.state.coverUrl}) 130px 0/cover no-repeat`}}> {/* Тут будет изображение */}
      <div className={classes.black}> {/* Тут будет тень  */}
        <div className={classes.main} > {/* Блок с описанием */}
          <div className={classes.main_title}>{showSerial.state.title}</div>
          <div className={classes.main_children}>
            <span>IMDb {showSerial.state.ratingImdb}</span>
            <span>{showSerial.state.genres[0].genre}&nbsp;&nbsp;&nbsp;|</span>
            <span>&nbsp;&nbsp;&nbsp;{showSerial.state.type}&nbsp;&nbsp;&nbsp;|</span>
            <span>&nbsp;&nbsp;&nbsp;{showSerial.state.year}</span>
          </div>
          <div className={classes.main_watch}>
          <a target="_blank" href={showSerial.state.trailer}>Watch</a>
        </div>
        <div className={classes.main_awards}>{showSerial.state.slogan}</div>
        </div>
       
      </div>
    </div>
    <div className={classes.description}>
      <p>Watch {showSerial.state.title} on Richbee Shows</p>
      <p>{showSerial.state.description}</p>
      <div className={classes.description}>
        <div className={classes.similars_title}>You may also like</div>
        <div className={classes.similars__list}>
          <div style = { {background: `url(${state.similars[0].posterUrl}) 0 0/cover no-repeat`}}>
            <div>
              <div>
                {state.similars[0].nameRu}
              </div>
              <div>
                 {state.similars[0].genres[0].genre}
              </div>
              <div>
                  {state.similars[0].description}
              </div>
              <div>
                IMDb {state.similars[0].ratingImdb}
              </div>
            </div>
          </div>
          
          
              
              
            
        </div>
    </div>
    </div>
    

    </div>
   
  )
}

export default Film_descriptions