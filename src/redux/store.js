import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './reducer/authReducer'
import images from './reducer/images'
import singleImage from './reducer/singleImageReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

// redux-persist configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
  }
   

// the combine reducers
const reducers = combineReducers({
    auth,
   images,
    singleImage
})
 
const persistedReducer = persistReducer(persistConfig, reducers)
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)
