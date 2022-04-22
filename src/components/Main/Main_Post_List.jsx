import React, { useMemo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FETCH_SIMILARS_SUCCESS } from '../../store/reducers/searchReducer';
import { getSimilars } from '../../store/action-creators/getSimilars';
import Main_Post from '../UI/Main_Post/Main_Post';
import { GET_FILM_ID } from './../../store/reducers/searchReducer';
import Loader from './../UI/Loader/Loader';
import './../../styles/Main.css'


const Main_Post_List = () => {
    
    const showSerials = useSelector ( state => state.searchReducer)
    console.log(showSerials, 'Гавно')
    const dispatch = useDispatch()
    
    const navigate = useNavigate();
   
    function goToFilm(item, index){
        dispatch(getSimilars(item))
        dispatch({type: GET_FILM_ID, payload: index})
        navigate('/film')
        
    }
    
    const [state, getState] = useState('Введите название фильма')
    



    if (showSerials.loading){
        return <div className="main_Loading"><Loader/></div>
    }
    if (showSerials.error){
        return <div className="main_Wait">{showSerials.error}</div>
    }    

    if (!showSerials.items){
        return <div className="main_Wait"> Введите название фильма</div>
            }
    if (!showSerials.items.length){
        return <div className="main_Wait"> Фильм не найден</div>
            }
    return (
        <div className="main_Content">
        {showSerials.items.map( (item, index) => 
            <Main_Post onClick = { () => goToFilm(item, item.key)} index = {index} key = {index} />
        )}
    </div>
     )  
}

export default Main_Post_List