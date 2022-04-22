import React, { useMemo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FETCH_SIMILARS_SUCCESS } from '../../store/reducers/searchReducer';
import { getSimilars } from '../../store/action-creators/getSimilars';
import MainPost from '../UI/MainPost/MainPost';
import { GET_FILM_ID } from '../../store/reducers/searchReducer';
import Loader from '../UI/Loader/Loader';
import './../../styles/Main.scss';


const MainPostList = () => {
    
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

            <div className="main_Content_post" >

            <MainPost onClick = { () => goToFilm(showSerials.items[0], showSerials.items[0].key)} index = "0" key = "0" />
                
            </div>
        <div className="main_Content_list">
            {showSerials.items.map( (item, index) =>
                <MainPost onClick = { () => goToFilm(item, item.key)} index = {index} key = {index} />
        
        )}
        </div>
    </div>
     )  
}

export default MainPostList