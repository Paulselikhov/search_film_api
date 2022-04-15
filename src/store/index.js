import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { searchReducer } from "./reducers/searchReducer";




const rootReducer = combineReducers({
    searchReducer: searchReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) );