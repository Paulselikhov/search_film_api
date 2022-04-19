import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Post from './UI/Post/Post';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FETCH_SERIALS_SUCCESS } from '../store/reducers/searchReducer';


const SerailsList = () => {
    const showSerials = useSelector ( state => state.searchReducer)
    console.log(showSerials)

    const dispatch = useDispatch()

    const navigate = useNavigate();
   
    async function goToFilm(item){
        
        const response_similar1_title = await axios.get(`https://imdb-api.com/en/API/Title/k_x0zr25jc/${item.similars[0].id}`)

        item.similars[0].genres = response_similar1_title.data.genres
        item.similars[0].plot = response_similar1_title.data.plot 

        dispatch({type: FETCH_SERIALS_SUCCESS, payload: item.serials})

        navigate('/film', {state: item})
        
    }
    if (showSerials.loading){
        return <h1>Идёт загрузка...</h1>
    }
    if (showSerials.error){
        return <h1>{showSerials.error}</h1>
    }    
    return (
        <div>
            
            {showSerials.serials.map( item => 
                <Post onClick = { () => goToFilm(item)} type={item.type} year={item.year} awards={item.awards} imDbRating={item.imDbRating} id={item.id} title={item.title} genres={item.genres} image={item.image} />
            )}
            
        </div>
    )
}

export default SerailsList