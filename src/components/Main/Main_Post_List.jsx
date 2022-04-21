import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FETCH_SIMILARS_SUCCESS } from '../../store/reducers/searchReducer';
import { getSimilars } from '../../store/action-creators/getSimilars';
import Main_Post from '../UI/Main_Post/Main_Post';
import { GET_FILM_ID } from './../../store/reducers/searchReducer';


const Main_Post_List = () => {
    const showSerials = useSelector ( state => state.searchReducer)

    const dispatch = useDispatch()
    const dispatch2 = useDispatch()

    const navigate = useNavigate();
   
    
    

    function goToFilm(item, index){
        dispatch2(getSimilars(item))
        dispatch({type: GET_FILM_ID, payload: index})
        navigate('/film')
        
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
                <Main_Post onClick = { () => goToFilm(item, item.key)} index = {index} key = {index} />
            )}

        </div>
    )
}

export default Main_Post_List