import React from 'react';
import classes from './Film_descriptions.module.scss';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Film_descriptions = () => {


  const showSerial = useLocation();
    console.dir(showSerial.state)
 

  return (
    <div className={classes.Film_descriptions}>
      
      <div className={classes.title} style = { {background: `url(${showSerial.state.images[0].image}) 0 0/cover no-repeat`}}> {/* Тут будет изображение */}
      <div className={classes.black}> {/* Тут будет тень  */}
        <div className={classes.main} > {/* Блок с описанием */}
          <div className={classes.main_title}>{showSerial.state.title}</div>
          <div className={classes.main_children}>
            <span>{showSerial.state.imDbRating}</span>
            <span>{showSerial.state.genres}</span>
            <span>{showSerial.state.type}</span>
            <span>{showSerial.state.year}</span>
          </div>
          <div className={classes.main_watch}>
          <a target="_blank" href={showSerial.state.trailer}>Watch</a>
        </div>
        <div className={classes.main_awards}>{showSerial.state.awards}</div>
        </div>
       
      </div>
    </div>
    <div className={classes.description}>
      <p>Watch {showSerial.state.title} on Richbee Shows</p>
      <p>{showSerial.state.plot}</p>
      <div className={classes.plot}>
        <div className={classes.similars_title}>You may also like</div>
        <div className={classes.similars__list}>
          <div style = { {background: `url(${showSerial.state.similars[0].image}) 0 0/100% auto no-repeat`}}></div>
          <div style = { {background: `url(${showSerial.state.similars[1].image}) 0 0/100% auto no-repeat`}}></div>
          <div style = { {background: `url(${showSerial.state.similars[2].image}) 0 0/100% auto no-repeat`}}></div>
          <div style = { {background: `url(${showSerial.state.similars[3].image}) 0 0/100% auto no-repeat`}}></div>
        </div>
    </div>
    </div>
    

    </div>
   
  )
}

export default Film_descriptions