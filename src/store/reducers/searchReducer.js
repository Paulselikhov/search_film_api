

export const FETCH_SERIALS = "FETCH_SERIALS";
export const FETCH_SERIALS_SUCCESS = "FETCH_SERIALS_SUCCESS";
export const FETCH_SERIALS_ERROR = "FETCH_SERIALS_ERROR";
export const FETCH_SIMILARS_SUCCESS = "FETCH_SIMILARS_SUCCESS";
export const GET_FILM_ID = "GET_FILM_ID";

const defaultState = {
    film_id: null,
    items: null,
    /* items: [{
        imbdId: 'id999', 
        nameRu:'Stangers things: part 1', 
        year: '1997', 
        type: 'MySerial', 
        genres: 'MyGenre', 
        ratingImdb: 9.9, 
        coverUrl: 'https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig',
        slogan: 'Нет слогана',
        description: 'Нео не представлял во что он влип. Мир виртуальных технологий очень опасен и не щадит никого. Он взял пушку и пошел всех мочить, потом попал в другое измерение и там творил всякие ужасные вещи и еще носил темные очки и темное пальто и вообще круто выглядел...',
        posterUrl:'https://kinopoiskapiunofficial.tech/images/posters/kp/961694.jpg',
    },], */
    similars: [{
        imbdId: 'id000', 
        nameRu:'Similar', 
        year: '1900', 
        type: 'MySimilar', 
        genres: 'MyGenre', 
        ratingImdb: 1.9, 
        coverUrl: 'https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig',
        slogan: 'Нет слогана для симилара',
        description: 'Нео не представлял во что он влип. Мир виртуальных технологий очень опасен и не щадит никого. Он взял пушку и пошел всех мочить, потом попал в другое измерение и там творил всякие ужасные вещи и еще носил темные очки и темное пальто и вообще круто выглядел...',
        posterUrl:'https://kinopoiskapiunofficial.tech/images/posters/kp/961694.jpg',
    },],
    loading: false,
    statusText: 'Статус не обнаружен',
    
}

export const searchReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCH_SERIALS:
            return {...state, loading: true, error: null}
        case FETCH_SERIALS_SUCCESS:
            return {...state, loading: false, error: null, items:action.payload }
        case FETCH_SIMILARS_SUCCESS:
            return {...state, loading: false, error: null, similars:action.payload }
        case GET_FILM_ID:
            return {...state, loading: false, error: null, film_id:action.payload }
        case FETCH_SERIALS_ERROR:
            return {...state, loading: false, error: action.payload, items: []}
        default:
            return state
    }
}