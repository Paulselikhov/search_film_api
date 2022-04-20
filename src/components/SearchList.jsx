import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Post from './UI/Post/Post';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FETCH_SIMILARS_SUCCESS } from '../store/reducers/searchReducer';


const SearchList = () => {
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
        const sim = [{}]
        for (let i = 0; i < 4; i++) {
            const response_similar_id = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${response_similars.data.items[i].filmId}`,{
            method: 'GET',
            headers: {
                'X-API-KEY': key,
                'Content-Type': 'application/json',
                },
            })
            sim[i] = response_similar_id.data
        }
        
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
            
            {showSerials.items.map( (item, index) => 
                <Post onClick = { () => goToFilm(item)} index = {index} key = {index} />
            )}

        </div>
    )
}

export default SearchList