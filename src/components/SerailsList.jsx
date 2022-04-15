import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSerials } from '../store/action-creators/fetchSerials';
import Post from './UI/Post';


const SerailsList = () => {
    const showSerials = useSelector ( state => state.searchReducer)
    

    const array = ['i1324153', '1324124321', '1325235234']
    
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
            {showSerials.serials.map( item => 
                <Post title={item.title} />
            )}
            
        </div>
    )
}

export default SerailsList