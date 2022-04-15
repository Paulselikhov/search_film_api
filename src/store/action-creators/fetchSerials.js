import axios from "axios";
import { FETCH_SERIALS, FETCH_SERIALS_ERROR, FETCH_SERIALS_SUCCESS } from "../reducers/searchReducer";


export const fetchSerials = () => {
    console.log('dispatching...')
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_SERIALS})
            const response = await axios.get('https://imdb-api.com/en/API/Title/k_mj2b6dz1/tt10048342')
            console.log(response.status)
            if (response.status == 200) {
                dispatch({type: FETCH_SERIALS_ERROR, payload: 'Произошла ошибка при загрузке сервера'})
            } else {
            dispatch({type: FETCH_SERIALS_SUCCESS, payload: response.data.title})
            }
        } catch (e){
            dispatch({type: FETCH_SERIALS_ERROR, payload: 'Произошла ошибка при загрузке сериалов'})
        }
    }
}