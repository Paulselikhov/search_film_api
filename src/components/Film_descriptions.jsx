import React from 'react';
import classes from './Film_descriptions.module.scss';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Film_descriptions = () => {


  const showSerial = useLocation();
    console.dir(showSerial.state)
 

  return (
    <div className={classes.Film_descriptions}>
      
      <div className={classes.title} style = { {background: `url(${showSerial.state.images[0].image}) 0 0/100% auto no-repeat`}}> {/* Тут будет изображение */}
      <div className={classes.black}> {/* Тут будет тень  */}
        <div className={classes.main} > {/* Блок с описанием */}
          <div className={classes.main_title}>{showSerial.state.title}</div>
          <div className={classes.main_children}>
            <span>IMDb {showSerial.state.imDbRating}</span>
            <span>{showSerial.state.genres}&nbsp;&nbsp;&nbsp;|</span>
            <span>&nbsp;&nbsp;&nbsp;{showSerial.state.type}&nbsp;&nbsp;&nbsp;|</span>
            <span>&nbsp;&nbsp;&nbsp;{showSerial.state.year}</span>
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
          <div style = { {background: `url(${showSerial.state.similars[0].image}) 0 0/cover no-repeat`}}>
            <div>
              <div>
                {showSerial.state.similars[0].title}
              </div>
              <div>
                 {showSerial.state.similars[0].genres}
              </div>
              <div>
                  {showSerial.state.similars[0].plot}
              </div>
              <div>
                IMDb {showSerial.state.similars[0].imDbRating}
              </div>
            </div>
          </div>
          <div style = { {background: `url(${showSerial.state.similars[1].image}) 0 0/cover no-repeat`}}>
            <div>
              <div>
                {showSerial.state.similars[1].title}
              </div>
              <div>
                 {showSerial.state.similars[1].genres}
              </div>
              <div>
                  {showSerial.state.similars[1].plot}
              </div>
              <div>
                IMDb {showSerial.state.similars[1].imDbRating}
              </div>
            </div>
          </div>
          <div style = { {background: `url(${showSerial.state.similars[2].image}) 0 0/cover no-repeat`}}>
            <div>
              <div>
                {showSerial.state.similars[2].title}
              </div>
              <div>
                 {showSerial.state.similars[2].genres}
              </div>
              <div>
                  {showSerial.state.similars[2].plot}
              </div>
              <div>
                IMDb {showSerial.state.similars[2].imDbRating}
              </div>
            </div>
          </div>
          <div style = { {background: `url(${showSerial.state.similars[3].image}) 0 0/cover no-repeat`}}>
            <div>
              <div>
                {showSerial.state.similars[3].title}
              </div>
              <div>
                 {showSerial.state.similars[3].genres}
              </div>
              <div>
                  {showSerial.state.similars[3].plot}
              </div>
              <div>
                IMDb {showSerial.state.similars[3].imDbRating}
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