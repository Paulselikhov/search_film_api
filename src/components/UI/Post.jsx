import React from 'react'

const Post = ({title, ...props}) => {
  return (
    <div>
        <div>Изображение</div> {/* Изображение */}
        <div> {/* Пост и рейтинг */}
            <div>
                <div>{/* Заголовок */}
                    Заголовок: {title}
                    <div></div> {/* TVSeries | Drama | 2020 */}
                    <div></div> {/* Rating */}
                </div> 
            </div> {/* Пост */}
            <div>Рейтинг</div> {/* Рейтинг */}
        </div> 
        
    </div>
  )
}

export default Post