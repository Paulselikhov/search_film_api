import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSimilars } from '../../store/action-creators/getSimilars';
import MainPost from '../UI/MainPost/MainPost';
import Loader from '../UI/Loader/Loader';
import { GET_FILM_ID } from '../../store/reducers/searchReducer';
import classes from  './../../styles/Main.module.scss';


const MainPostList = () => {
    
    const showSerials = useSelector ( state => state.searchReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate();
   
    function goToFilm(item, index){
        dispatch(getSimilars(item))
        dispatch({type: GET_FILM_ID, payload: index})
        navigate("Film")
    }
    
    if (showSerials.loading){
        return <div className={classes.main_Loading}><Loader/></div>
    }
    if (showSerials.error){
        return <div className={classes.main_Wait}>{showSerials.error}</div>
    }    

    if (!showSerials.items){
        return <div className={classes.main_Wait}> Введите название фильма</div>
            }
    if (!showSerials.items.length){
        return <div className={classes.main_Wait}> Фильм не найден</div>
            }
    return (

        
        <div className={classes.main_Content}>

            <div className={classes.main_Content_post} >

            <MainPost onClick = { () => goToFilm(showSerials.items[0], showSerials.items[0].key)} index = "0" key = "0" />
                
            </div>
        <div className={classes.main_Content_list}>
            {showSerials.items.map( (item, index) =>
                <MainPost onClick = { () => goToFilm(item, item.key)} index = {index} key = {index} />
        
        )}
        </div>
    </div>
     )  
}

export default MainPostList