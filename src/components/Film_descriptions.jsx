import React from 'react';
import classes from './Film_descriptions.module.scss';

const Film_descriptions = () => {
  return (
    <div> {/* Тут будет изображение */}
      <div> {/* Тут будет тень  */}
        <div className={classes.main}> {/* Блок с описанием */}
          <div>The Queens's Gambit</div>
          <div className={classes.main_children}>
            <span>imbd 1.1.</span>
            <span>Drama</span>
            <span>tv series</span>
            <span>1997</span>
          </div>
        </div>
        <div className={classes.watch}>Watch</div>
        <div className={classes.awards}>Top rated test won test lorem lorem test</div>
      </div>
    </div>
  )
}

export default Film_descriptions