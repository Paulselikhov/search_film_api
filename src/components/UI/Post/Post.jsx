import React from 'react';
import classes from './Post.module.scss';



const Post = ({title, ...props}) => {
  return (
    <div className={classes.main}>
        <div className={classes.image} >Изображение</div> {/* Изображение */}
        <div className={classes.post}> {/* Пост и рейтинг */}
            <div>
                <div className={classes.title}>{/* Заголовок */}
                    Заголовок: The test best film {title}
                    <div className={classes.description}>TVtest | dram | 1997</div> {/* TVSeries | Drama | 2020 */}
                    <div className={classes.title_rating}> Top test rated 148 | won Test test test test </div> {/* Rating */}
                </div> 
            </div> {/* Пост */}
                <div className={classes.rating}>Рейтинг</div> {/* Рейтинг */} 
            
        </div> 
        
    </div>
  )
}

export default Post