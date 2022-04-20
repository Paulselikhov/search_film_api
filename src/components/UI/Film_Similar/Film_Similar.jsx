import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Film_Similar.module.scss';

const Film_Similar = ({index, ...props}) => {

  const state = useSelector ( state => state.searchReducer)

  return (
    <div className={classes.similar_style} {...props}> 
      <div  style = { {background: `url(${state.similars[index].posterUrl}) 0 0/cover no-repeat`}}>
        <div>
          <div>
            {state.similars[index].nameRu}
          </div>
          <div>
            {state.similars[index].genres[0].genre}
          </div>
          <div>
              {state.similars[index].description}
          </div>
          <div>
            IMDb {state.similars[index].ratingImdb}
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Film_Similar