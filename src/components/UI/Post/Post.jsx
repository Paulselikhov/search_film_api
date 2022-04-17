import React from 'react';
import classes from './Post.module.scss';



const Post = ({title, id, type, year, awards, imDbRating, genres, image, ...props}) => {

  const raiting_default = 'Рейтинг';
  return (
    <div className={classes.main}>
        <div className={classes.image} style={{background: `url(${image})0 0/100% auto no-repeat`}} ></div> {/* Изображение */}
        <div className={classes.post}> {/* Пост и рейтинг */}
            <div>
                <div className={classes.title}>{/* Заголовок */}
                    {title}
                    <div className={classes.description}>{type} | {genres} | {year}</div> {/* TVSeries | Drama | 2020 */}
                    <div className={classes.title_rating}>{awards}</div> {/* Rating */}
                </div> 
            </div> {/* Пост */}
                <div className={classes.rating}>{imDbRating}</div> {/* Рейтинг */} 
            
        </div> 
        
    </div>
  )
}

export default Post