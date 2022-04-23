import axios from "axios";
import { FETCH_SERIALS, FETCH_SERIALS_ERROR, FETCH_SERIALS_SUCCESS } from "../reducers/searchReducer";




/* 4fdefa42-48de-42c9-850e-7d2efd595fca */


export const fetchSerials = (inputValue) => {

    const keyword=inputValue;
    const key = 'dec3cfb4-ee86-4b1b-b0a3-a2d612a08a90';

    console.log('dispatching...')
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_SERIALS})
            const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/?keyword=${keyword}&yearFrom=1990`,{
                    method: 'GET',
                    headers: {
                'X-API-KEY': key,
                'Content-Type': 'application/json',
                    },
                })
            if (response.status == 200) {

                for (let i = 0; i <= response.data.items.length-1; i++ ){

                    const response_id = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${response.data.items[i].kinopoiskId}`,{
                        method: 'GET',
                        headers: {
                    'X-API-KEY': key,
                    'Content-Type': 'application/json',
                        },
                    })

                    response.data.items[i].key = i
                    response.data.items[i].slogan = response_id.data.slogan
                    response.data.items[i].description = response_id.data.description
                    response.data.items[i].coverUrl = response_id.data.coverUrl
                    response.data.items[i].webUrl = response_id.data.webUrl
                    
                }
                dispatch({type: FETCH_SERIALS_SUCCESS, payload: response.data.items})

            } else {
                dispatch({type: FETCH_SERIALS_ERROR, payload: `Произошла ошибка на стороне сервера: ${response.data.statusText}  `})
            }
            
        } catch (e){
            dispatch({type: FETCH_SERIALS_ERROR, payload: `${e} `})
        }
    }
}