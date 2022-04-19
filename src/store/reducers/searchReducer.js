

export const FETCH_SERIALS = "FETCH_SERIALS";
export const FETCH_SERIALS_SUCCESS = "FETCH_SERIALS_SUCCESS";
export const FETCH_SERIALS_ERROR = "FETCH_SERIALS_ERROR";

const defaultState = {
    id: 'test',
    serials: [{title:'myFilm', year: '1997', type: 'Myserial', genres: 'Real', awards: 'Top for top the best !!!!', imDbRating: 9.9}],
    loading: false,
    error: null,
    serials: [
        {
            id:9999,
            type: 'myFilm',
            year: '1997',
            awards: 'test awards',
            genres: 'comedy',
            imDbRating: '12',
            title: 'myfilm',
            image: 'https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.7273_AL_.jpg',
            similars: [
                {
                    image: 'https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.7273_AL_.jpg'    
                },
                
                {
                    image: 'https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.7273_AL_.jpg'
                },

                {
                    image: 'https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.7273_AL_.jpg'
                },
                {
                    image: 'https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.7273_AL_.jpg'
                },

            ],
            images: [{
                image: 'https://imdb-api.com/images/original/MV5BZjdlNjc0ZTQtNWIwOS00YmY4LWE4NjAtZDJiNDk0NGVlOGM2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.5000_AL_.jpg'
            }
            ]
        }
    ]
}

export const searchReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCH_SERIALS:
            return {...state, loading: true, error: null, serials: []}
        case FETCH_SERIALS_SUCCESS:
            return {...state, loading: false, error: null, serials: action.payload}
        case FETCH_SERIALS_ERROR:
            return {...state, loading: false, error: action.payload, serials: []}
        default:
            return state
    }
}