import axios from "axios";
import { FETCH_SERIALS, FETCH_SERIALS_ERROR, FETCH_SERIALS_SUCCESS } from "../reducers/searchReducer";


/* 
keys:
Paulselikhov = k_mj2b6dz1
Paulselikhov2 = k_ksqaiwvn
vika = k_nlew0aq1

*/


export const fetchSerials = (inputValue) => {


    
    let link = 'https://imdb-api.com/en/API/SearchSeries/k_nlew0aq1/'+inputValue;


    console.log('dispatching...')
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_SERIALS})
            const response = await axios.get(link)
            //console.log(link)
            //console.log(response)
            if (response.data.errorMessage == null || response.data.errorMessage == "" ) {
                
                for (let i = 0; i <= response.data.results.length-1; i++ ){
                   console.log(response.data.results[i].id)
                   
                    const response2 = await axios.get(`https://imdb-api.com/en/API/Title/k_nlew0aq1/${response.data.results[i].id}`);
                    console.log(response2.data)

                    response.data.results[i].type = response2.data.type
                    response.data.results[i].year = response2.data.year
                    response.data.results[i].awards = response2.data.awards
                    response.data.results[i].imDbRating = response2.data.imDbRating
                    response.data.results[i].genres = response2.data.genres 
                    response.data.results[i].plot = response2.data.plot // пока не используется (описание)
                    response.data.results[i].similars = response2.data.similars // пока не используется
                    response.data.results[i].image = response2.data.image

                }

                dispatch({type: FETCH_SERIALS_SUCCESS, payload: response.data.results})
                
                
            } else {
                dispatch({type: FETCH_SERIALS_ERROR, payload: `Произошла ошибка на стороне сервера: ${response.data.errorMessage}  `})
            }
            
        } catch (e){
            dispatch({type: FETCH_SERIALS_ERROR, payload: `${e} `})
        }
    }
}