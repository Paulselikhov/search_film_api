import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSerials } from '../store/action-creators/fetchSerials';


const SerailsList = () => {
    const showSerials = useSelector ( state => state.searchReducer)
    

    
  /*   
    const dispatch = useDispatch()
    useEffect( () => {
            dispatch(fetchSerials())
        }, []) 
    
    */


    if (showSerials.loading){
        return <h1>Идёт загрузка...</h1>
    }
    if (showSerials.error){
        return <h1>{showSerials.error}</h1>
    }    
    return (
        <div>
            <h1>{showSerials.serials}</h1>
        </div>
    )
}

export default SerailsList