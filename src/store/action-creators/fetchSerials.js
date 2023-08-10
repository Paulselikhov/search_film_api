import axios from "axios";
import { FETCH_SERIALS, FETCH_SERIALS_ERROR, FETCH_SERIALS_SUCCESS } from "../reducers/searchReducer";


export const fetchSerials = (inputValue) => {

    const keyword=inputValue;
    const key = 'dec3cfb4-ee86-4b1b-b0a3-a2d612a08a90';

    return async(dispatch) => {
        try {
            dispatch({type: FETCH_SERIALS})
            const response_result = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${keyword}&yearFrom=1990`,{
                    method: 'GET',
                    headers: {
                'X-API-KEY': key,
                'Content-Type': 'application/json',
                    },
                })

            if (response_result.status == 200) {
                const response = {
                        items: [],
                }

                response_result.data.items.map( item => { // Обработка пустых значений
                    if ( item.type === "FILM" && item.ratingImdb != null && item.ratingKinopoisk != null && item.posterUrl != "https://kinopoiskapiunofficial.tech/images/posters/kp/424396.jpg"){
                        response.items.push(item)
                    }
                })
                    
                for (let i = 0; i <= response.items.length-1; i++ ){

                    const response_id = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${response.items[i].kinopoiskId}`,{
                        method: 'GET',
                        headers: {
                    'X-API-KEY': key,
                    'Content-Type': 'application/json',
                        },
                    })

                    response.items[i].key = i
                    response.items[i].slogan = response_id.data.slogan
                    response.items[i].webUrl = response_id.data.webUrl

                    if ( response_id.data.shortDescription == null){
                        response.items[i].shortDescription = "Нет описания"
                    } else {
                        response.items[i].shortDescription = response_id.data.shortDescription
                    }

                    if ( response_id.data.description == null){
                        response.items[i].description = "Описание фильма не найдено :c"
                    } else {
                        response.items[i].description = response_id.data.description
                    }
                    
                    if ( response_id.data.coverUrl == null) {
                        response.items[i].coverUrl = "https://alterlit.ru/media/post_images/b8b056b9b26b4f6c8dcd08963c9e5f9a.jpg"
                    } else {
                        response.items[i].coverUrl = response_id.data.coverUrl
                    }
                }
                dispatch({type: FETCH_SERIALS_SUCCESS, payload: response.items})
            } else {
                dispatch({type: FETCH_SERIALS_ERROR, payload: `Произошла ошибка на стороне сервера: ${response_result.data.statusText}  `})
            } 
        } catch (e){
            dispatch({type: FETCH_SERIALS_ERROR, payload: `${e} `})
        }
    }
}