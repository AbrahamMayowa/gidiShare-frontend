import {createStore, combineReducers} from 'redux'
import appleMiddleware from 'redux-thunk'
import thunk from 'redux-thunk'


const reducers = combineReducers({})

export default store = createStore(reducers, appleMiddleware(thunk))