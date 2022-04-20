import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Post from './UI/Post/Post';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FETCH_SIMILARS_SUCCESS } from '../store/reducers/searchReducer';


const SerailsList = () => {
    const showSerials = useSelector ( state => state.searchReducer)

    const dispatch = useDispatch()

    const navigate = useNavigate();
   
    async function goToFilm(item){

        const key ='dec3cfb4-ee86-4b1b-b0a3-a2d612a08a90';
        const response_similars = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${item.kinopoiskId}/similars`,{
            method: 'GET',
            headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
            },
        })
        
        console.log(response_similars)
        const response_similar_id = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${response_similars.data.items[0].filmId}`,{
            method: 'GET',
            headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
            },
        })
        console.log(response_similar_id)
       
        const sim = [response_similar_id.data]

        dispatch({type: FETCH_SIMILARS_SUCCESS, payload: sim})

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
            
            {showSerials.items.map( item => 
                <Post onClick = { () => goToFilm(item)} type={item.type} year={item.year} slogan={item.slogan} ratingImdb={item.ratingImdb} nameRu={item.nameRu} genres={item.genres} posterUrl={item.posterUrl} />
            )}

        </div>
    )
}

export default SerailsList