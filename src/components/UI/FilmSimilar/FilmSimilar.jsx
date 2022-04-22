import React from 'react';
import { useSelector } from 'react-redux';
import classes from './FilmSimilar.module.scss';

const FilmSimilar = ({index, ...props}) => {

  const state = useSelector ( state => state.searchReducer)

  return (
    <div className={classes.similar_style} {...props}> 
      <div  style = { {background: `url(${state.similars[index].posterUrl}) 0 0/cover no-repeat`}}>
        <div>
          <div>
            <div>
              {state.similars[index].nameRu}
            </div>
            <div>
              {state.similars[index].genres[0].genre}
            </div>
            <div>
                {state.similars[index].shortDescription}
            </div>
          </div>
          <p>
            IMDb {state.similars[index].ratingImdb}
          </p>
        </div>
      </div>
    </div> 
  )
}

export default FilmSimilar