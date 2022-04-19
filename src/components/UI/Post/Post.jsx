import React from 'react';
import classes from './Post.module.scss';



const Post = ({title, id, type, year, awards, imDbRating, genres, image, ...props}) => {

  
  return (
    <div className={classes.main} {...props}>
        <div className={classes.main_image} style={{background: `url(${image})0 0/100% auto no-repeat`}} ></div> {/* Изображение */}
        <div className={classes.main_post}>
          <div className={classes.post}> {/* Пост и рейтинг */}
            
                <div className={classes.title}>{/* Заголовок */}
                    <h1>{title}</h1>
                    <div className={classes.description}>{type} | {genres} | {year}</div> {/* TVSeries | Drama | 2020 */}
                </div> 
            
                <div className={classes.rating}>IMDb {imDbRating}</div> {/* Рейтинг */} 
          </div> 
          <div className={classes.awards}>{awards}</div> {/* Rating */}
        </div>
        
        
    </div>
  )
}

export default Post