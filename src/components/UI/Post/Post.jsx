import React from 'react';
import classes from './Post.module.scss';



const Post = ({nameRu, type, year, slogan, ratingImdb, genres, posterUrl, ...props}) => {


  return (
    <div className={classes.main} {...props}>
        <div className={classes.main_image} style={{background: `url(${posterUrl})0 0/100% auto no-repeat`}} ></div> {/* Изображение */}
        <div className={classes.main_post}>
          <div className={classes.post}> {/* Пост и рейтинг */}
            
                <div className={classes.title}>{/* Заголовок */}
                    <h1>{nameRu}</h1>
                    <div className={classes.description}>{type} | {genres[0].genre} | {year}</div> {/* TVSeries | Drama | 2020 */}
                </div> 
            
                <div className={classes.rating}>IMDb {ratingImdb}</div> {/* Рейтинг */} 
          </div> 
          <div className={classes.awards}>{slogan}</div> {/* Rating */}
        </div>
        
        
    </div>
  )
}

export default Post