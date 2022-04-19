

export const FETCH_SERIALS = "FETCH_SERIALS";
export const FETCH_SERIALS_SUCCESS = "FETCH_SERIALS_SUCCESS";
export const FETCH_SERIALS_ERROR = "FETCH_SERIALS_ERROR";

const defaultState = {
    id: 'test',
    serials: [{title:'Stangers things: part two', year: '1997', type: 'Myserial', genres: 'Real', awards: 'Top for top the best !!!!', imDbRating: 9.9}],
    loading: false,
    error: null,
    serials: [
        {
            id:9999,
            type: 'Movies',
            year: '1997',
            awards: 'Top Rated tv #9999 | Won 9 Golden  Globes, Another 12 wins & 19 nomination',
            genres: 'comedy',
            imDbRating: '12',
            title: 'Stangers things: part two',
            image: 'https://imdb-api.com/images/original/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_Ratio0.7273_AL_.jpg',
            plot: 'Nine year-old orphan Beth Harmon is quiet, sullen, and by all appearances unremarkable. That is, until she plays her first game of chess. Her senses grow sharper, her thinking clearer, and for the first time in her life she feels herself fully in control. By the age of sixteen, shes competing for the U.S. Open championship. But as Beth hones her skills on the professional circuit, the stakes get higher, her isolation grows more frightening, and the thought of escape becomes all the more tempting. Based on the book by Walter Tevis.',
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