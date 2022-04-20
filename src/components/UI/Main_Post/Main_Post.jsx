import React from 'react';
import classes from './Main_Post.module.scss';
import { useSelector } from 'react-redux';



const Main_Post = ({index, ...props}) => {

  const state = useSelector ( state => state.searchReducer)

  return (
    <div className={classes.main} {...props}>
        <div className={classes.main_image} style={{background: `url(${state.items[index].posterUrl})0 0/100% auto no-repeat`}} ></div> {/* Изображение */}
        <div className={classes.main_post}>
          <div className={classes.post}> {/* Пост и рейтинг */}
            
                <div className={classes.title}>{/* Заголовок */}
                    <h1>{state.items[index].nameRu}</h1>
                    <div className={classes.description}>{state.items[index].type} | {state.items[index].genres[0].genre} | {state.items[index].year}</div> {/* TVSeries | Drama | 2020 */}
                </div> 
            
                <div className={classes.rating}>IMDb {state.items[index].ratingImdb}</div> {/* Рейтинг */} 
          </div> 
          <div className={classes.awards}>{state.items[index].slogan}</div> {/* Rating */}
        </div>
        
        
    </div>
  )
}

export default Main_Post