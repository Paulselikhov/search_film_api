
const FATCH_SERIALS = "FATCH_SERIALS";
const FATCH_SERIALS_SUCCESS = "FATCH_SERIALS_SUCCESS";
const FATCH_SERIALS_ERROR = "FATCH_SERIALS_ERROR";

const defaultState = {
    serials: [],
    loading: '123',
    error: null,
}

export const searchReducer = (state, action) => {
    switch(action.type){
        case FATCH_SERIALS:
            return {loading: true, error: null, serials: []}
        case FATCH_SERIALS_SUCCESS:
            return {loading: false, error: null, serials: action.payload}
        case FATCH_SERIALS_ERROR:
            return {loading: false, error: action.payload, serials: []}
        default:
            return state
    }
}