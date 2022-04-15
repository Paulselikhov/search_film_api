import axios from "axios";
import { FETCH_SERIALS, FETCH_SERIALS_ERROR, FETCH_SERIALS_SUCCESS } from "../reducers/searchReducer";

/* 
keys:
Paulselikhov = k_mj2b6dz1
Paulselikhov2 = k_ksqaiwvn
vika = k_nlew0aq1

*/


export const fetchSerials = () => {
    console.log('dispatching...')
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_SERIALS})
            const response = await axios.get('https://imdb-api.com/en/API/SearchSeries/k_nlew0aq1/stranger%20thin')
            console.log(response.data.errorMessage)
            console.log(response)
            if (response.data.errorMessage == null || response.data.errorMessage == "" ) {
                dispatch({type: FETCH_SERIALS_SUCCESS, payload: response.data.results[0].title})

            } else {
                dispatch({type: FETCH_SERIALS_ERROR, payload: `Произошла ошибка на стороне сервера: ${response.data.errorMessage}  `})
            }
            
        } catch (e){
            dispatch({type: FETCH_SERIALS_ERROR, payload: `${e} `})
        }
    }
}