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
        const key ='dec3cfb4-ee86-4b1b-b0a3-a2d612a08a90';
        const response_similars = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${response.data.items[i].kinopoiskId}`,{
            method: 'GET',
            headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
            },
        })
        dispatch({type: FETCH_SERIALS_SUCCESS, payload: item.serials})

        navigate('/film', {state: item})
        
    }

    async function goToFilm2(){

        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/305/similars`,{
                    method: 'GET',
                    headers: {
                'X-API-KEY': '4fdefa42-48de-42c9-850e-7d2efd595fca',
                'Content-Type': 'application/json',
                    },
                })
         console.log(response)       
        
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
                <Post onClick = { () => goToFilm2()} type={item.type} year={item.year} slogan={item.slogan} ratingImdb={item.ratingImdb} nameRu={item.nameRu} genres={item.genres} posterUrl={item.posterUrl} />
            )}
            
        </div>
    )
}

export default SerailsList