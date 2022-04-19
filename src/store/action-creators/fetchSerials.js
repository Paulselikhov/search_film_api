import axios from "axios";
import { FETCH_SERIALS, FETCH_SERIALS_ERROR, FETCH_SERIALS_SUCCESS } from "../reducers/searchReducer";


/* 
keys:
Paulselikhov = k_mj2b6dz1
Paulselikhov2 = k_ksqaiwvn
vika = k_nlew0aq1

https://temprmail.com/ru/
k_oya3zez6

*/


export const fetchSerials = (inputValue) => {


    
    let link = 'https://imdb-api.com/en/API/SearchSeries/k_x0zr25jc/'+inputValue;


    console.log('dispatching...')
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_SERIALS})
            const response = await axios.get(link)

            if (response.data.errorMessage == null || response.data.errorMessage == "" ) {
                
                for (let i = 0; i <= response.data.results.length-1; i++ ){
                   
                    const response_title = await axios.get(`https://imdb-api.com/en/API/Title/k_x0zr25jc/${response.data.results[i].id}`);

                    const response_trailer = await axios.get(`https://imdb-api.com/en/API/Trailer/k_x0zr25jc/${response.data.results[i].id}`)

                    const response_images = await axios.get(`https://imdb-api.com/en/API/Images/k_x0zr25jc/${response.data.results[i].id}`)

                    
                    response.data.results[i].key = i
                    response.data.results[i].type = response_title.data.type
                    response.data.results[i].year = response_title.data.year
                    response.data.results[i].awards = response_title.data.awards
                    response.data.results[i].imDbRating = response_title.data.imDbRating
                    response.data.results[i].genres = response_title.data.genres 
                    response.data.results[i].plot = response_title.data.plot // пока не используется (описание)
                    response.data.results[i].similars = response_title.data.similars // пока не используется
                    response.data.results[i].image = response_title.data.image
                    response.data.results[i].trailer = response_trailer.data.link
                    response.data.results[i].images = response_images.data.items

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