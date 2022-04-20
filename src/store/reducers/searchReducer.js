

export const FETCH_SERIALS = "FETCH_SERIALS";
export const FETCH_SERIALS_SUCCESS = "FETCH_SERIALS_SUCCESS";
export const FETCH_SERIALS_ERROR = "FETCH_SERIALS_ERROR";

const defaultState = {
    id: 'test',
    serials: [{
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

        similars: [
            {   
                title: 'Title not found',
                genres: 'Genre not found',
                plot: 'Not loaded',
                imDbRating: '0.0',
                image: 'https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.7273_AL_.jpg'    
            },
            
            {
                title: 'Title not found',
                genres: 'Genre not found',
                plot: 'Not loaded',
                imDbRating: '0.0',
                image: 'https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.7273_AL_.jpg'
            },

            {
                title: 'Title not found',
                genres: 'Genre not found',
                plot: 'Not loaded',
                imDbRating: '0.0',
                image: 'https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.7273_AL_.jpg'
            },
            {
                title: 'Title not found',
                genres: 'Genre not found',
                plot: 'Not loaded',
                imDbRating: '0.0',
                image: 'https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.7273_AL_.jpg'
            },

        ],
        images: [{
            image: 'https://imdb-api.com/images/original/MV5BZjdlNjc0ZTQtNWIwOS00YmY4LWE4NjAtZDJiNDk0NGVlOGM2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.5000_AL_.jpg'
        }
        ]
    },],
    loading: false,
    statusText: 'Статус не обнаружен',
    
}

export const searchReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCH_SERIALS:
            return {...state, loading: true, error: null, serials: []}
        case FETCH_SERIALS_SUCCESS:
            return {...state, loading: false, error: null, serials: action.payload }
        case FETCH_SERIALS_ERROR:
            return {...state, loading: false, error: action.payload, serials: []}
        default:
            return state
    }
}