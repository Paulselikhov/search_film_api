import axios from "axios";
import { FETCH_SERIALS, FETCH_SERIALS_ERROR, FETCH_SERIALS_SUCCESS } from "../reducers/searchReducer";


/* 
keys:
Paulselikhov = k_mj2b6dz1
Paulselikhov2 = k_ksqaiwvn
vika = k_nlew0aq1

https://temprmail.com/ru/
k_79q1qlso
k_zb7c46si

*/


export const fetchSerials = (inputValue) => {


    
    let link = 'https://imdb-api.com/en/API/SearchSeries/k_zb7c46si/'+inputValue;


    console.log('dispatching...')
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_SERIALS})
            const response = await axios.get(link)

            if (response.data.errorMessage == null || response.data.errorMessage == "" ) {
                
                for (let i = 0; i <= response.data.results.length-1; i++ ){
                   
                    const response_title = await axios.get(`https://imdb-api.com/en/API/Title/k_zb7c46si/${response.data.results[i].id}`);

                    const response_trailer = await axios.get(`https://imdb-api.com/en/API/Trailer/k_zb7c46si/${response.data.results[i].id}`)

                    const response_images = await axios.get(`https://imdb-api.com/en/API/Images/k_zb7c46si/${response.data.results[i].id}`)

                    const response_similar1_title = await axios.get(`https://imdb-api.com/en/API/Title/k_zb7c46si/${response_title.data.similars[0].id}`)
                    
                    
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

                    response.data.results[i].similars[0].genres = response_similar1_title.data.genres
                    response.data.results[i].similars[0].plot = response_similar1_title.data.plot

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