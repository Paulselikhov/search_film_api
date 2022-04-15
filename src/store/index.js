import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { searchReducer } from "./reducers/searchReducer";
import { inputReducer } from "./reducers/inputReducer";




const rootReducer = combineReducers({
    searchReducer: searchReducer,
    inputReducer: inputReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) );