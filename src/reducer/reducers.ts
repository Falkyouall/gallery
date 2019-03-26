
import { combineReducers } from 'redux'
import counter from './counter'
import carousel from "./carousel";

const rootReducer = combineReducers({
    counter,
    carousel
})

export default rootReducer
