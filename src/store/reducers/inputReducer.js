
const SET_INPUT = "SET_INPUT"

const defaultState = {
    inputValue: "",
}

export const inputReducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_INPUT:
            return {...state, inputValue: action.payload}
        default:
            return state
    }
}