import axios from "axios";
import { FETCH_SERIALS, FETCH_SERIALS_ERROR, FETCH_SERIALS_SUCCESS } from "../reducers/searchReducer";


/* 
keys:
Paulselikhov = k_mj2b6dz1
Paulselikhov2 = k_ksqaiwvn
vika = k_nlew0aq1

free keys for http://www.omdbapi.com/?i=tt3896198&apikey=4b447405
'4b447405',
            'eb0c0475',
            '7776cbde',
            'ff28f90b',
            '6c3a2d45',
            'b07b58c8',
            'ad04b643',
            'a95b5205',
            '777d9323',
            '2c2c3314',
            'b5cff164',
            '89a9f57d',
            '73a9858a',
            'efbd8357'
*/

export const fetchSerials = (inputValue) => {



    console.log('dispatching...')
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_SERIALS})
            const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/?keyword=мстители',{
                    method: 'GET',
                    headers: {
                'X-API-KEY': '4fdefa42-48de-42c9-850e-7d2efd595fca',
                'Content-Type': 'application/json',
                    },
                })
            if (response.status == 200) {

                for (let i = 0; i <= response.data.items.length-1; i++ ){
                    
                    response.data.items[i].key = i

                }
                dispatch({type: FETCH_SERIALS_SUCCESS, payload: response.data.items})
            } else {
                dispatch({type: FETCH_SERIALS_ERROR, payload: `Произошла ошибка на стороне сервера: ${response.data.errorMessage}  `})
            }
            
        } catch (e){
            dispatch({type: FETCH_SERIALS_ERROR, payload: `${e} `})
        }
    }
}