
import axios from 'axios';
import { FETCH_SIMILARS_SUCCESS } from '../reducers/searchReducer';



export const getSimilars = (item) => {
    
    const key ='dec3cfb4-ee86-4b1b-b0a3-a2d612a08a90';
    return async(dispatch) => {
       
        const response_similars = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${item.kinopoiskId}/similars`,{
            method: 'GET',
            headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
            },
        })

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
            sim[i].key = [i]
        }
        
        dispatch({type: FETCH_SIMILARS_SUCCESS, payload: sim})
    }
}