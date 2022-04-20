import React from 'react';
import { useSelector } from 'react-redux';

const Similar = ({index}) => {

  const state = useSelector ( state => state.searchReducer)

  return (
    <div style = { {background: `url(${state.similars[index].posterUrl}) 0 0/cover no-repeat`}}>
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
  )
}

export default Similar