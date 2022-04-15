

export const FETCH_SERIALS = "FETCH_SERIALS";
export const FETCH_SERIALS_SUCCESS = "FETCH_SERIALS_SUCCESS";
export const FETCH_SERIALS_ERROR = "FETCH_SERIALS_ERROR";

const defaultState = {
    serials: 'were is title?',
    loading: false,
    error: null,
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