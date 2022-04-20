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
                <Post onClick = { () => goToFilm(item)} type={item.type} year={item.year} slogan={item.slogan} ratingImdb={item.ratingImdb} nameRu={item.nameRu} genres='not use' posterUrl={item.posterUrl} />
            )}
            
        </div>
    )
}

export default SerailsList