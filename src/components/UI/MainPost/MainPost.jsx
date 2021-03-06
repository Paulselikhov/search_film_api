import React from 'react';
import { useSelector } from 'react-redux';
import classes from './MainPost.module.scss';



const MainPost = ({index, ...props}) => {

  const state = useSelector ( state => state.searchReducer)

  return (
    <div className={classes.main} {...props}>
      
        <div className={classes.main_image} style={{background: `url(${state.items[index].posterUrl})0 0/100% auto no-repeat`}} ></div> {/* Изображение */}
        <div className={classes.main_post}>
          <div className={classes.post}> {/* Пост и рейтинг */}
            
                <div className={classes.post_title}>{/* Заголовок */}
                    <h1>{state.items[index].nameRu}</h1>
                    <div className={classes.title_description}>{state.items[index].type} | {
                    (state.items[index].genres[0] === undefined)? /* Временное условие! */
                    state.items[index].genres[0]
                    : state.items[index].genres[0].genre
                  } | {state.items[index].year}</div> {/* TVSeries | Drama | 2020 */}
                </div> 
            
                <div>
                  <div className={classes.post_ratingImdb}>IMDb {state.items[index].ratingImdb}</div> {/* Рейтинг */}
                  <div className={classes.post_ratingKin}>Кинопоиск {state.items[index].ratingKinopoisk}</div> {/* Рейтинг */}
                </div> 
          </div> 
          <div className={classes.slogan}>{state.items[index].shortDescription}</div> {/* Rating */}
        </div>
        
        
    </div>
  )
}

export default MainPost