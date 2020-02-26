import {SUCCESS_REFRESH_AUTH, FAILURE_REFRESH_AUTH, BEGINS_REFRESH_AUTH} from '../action/refreshAuth'
import {CREATE_USER_FAIL, CREATE_USER_START, CREATE_USER_SUCCESS} from '../action/createUserAction'
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from '../action/login'
import {LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAIL} from '../action/logout'

const initialState = {
    error: '',
    isAuth: false,
    token: '',
    refreshToken: '',
    userId: '',
    expiresIn: null,
    username: '',
    imageUrl: '',
    loading: false,
    success: false,
    

}

const auth = (state=initialState, action) => {
    switch(action.type){
        case SUCCESS_REFRESH_AUTH:
            return {
                ...state,
                isAuth: true,
                token: action.payload.data.refreshToken.token,
                expiresIn: action.payload.data.refreshToken.expiresIn,
                username: action.payload.data.refreshToken.username,
                imageUrl: action.payload.data.refreshToken.imageUrl,
                loading: false,
                error: ''

            }

            case LOGIN_START:
                return {
                    ...state,
                    loading: true,
                }

            case LOGIN_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    isAuth: true,
                    success: true,
                    token: action.payload.data.login.token,
                    refreshToken: action.payload.data.login.refreshToken,
                    userId: action.payload.data.login.userId,
                    expiresIn: action.payload.data.login.expiresIn,
                    username: action.payload.data.login.username,
                    imageUrl: action.payload.data.login.imageUrl,
                    error: ''
                }

            case LOGIN_FAIL:
                return {
                    ...state,
                    error: action.payload.message,
                    isAuth: false,
                    token: '',
                    refreshToken: '',
                    userId: '',
                    expiresIn: null,
                    username: '',
                    imageUrl: '',
                    loading: false
                }

        
        case CREATE_USER_START:
            return {
                ...state,
                loading: true
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                token: action.payload.data.createUser.token,
                refreshToken: action.payload.data.createUser.refreshToken,
                userId: action.payload.data.createUser.userId,
                expiresIn: action.payload.data.createUser.expiresIn,
                username: action.payload.data.createUser.username,
                imageUrl: action.payload.data.createUser.imageUrl,
                loading: false,
                success: true,
                error: ''
            }

        case CREATE_USER_FAIL:
            
            return {
                ...state,
                error: action.payload.message,
                isAuth: false,
                token: '',
                refreshToken: '',
                userId: '',
                expiresIn: null,
                username: '',
                imageUrl: '',
                loading: false
            }

        case LOGOUT_SUCCESS:
            return {
                error: '',
                isAuth: false,
                token: '',
                refreshToken: '',
                userId: '',
                expiresIn: null,
                username: '',
                imageUrl: '',
                loading: false,
                success: false,
            }

        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload.message,
                loading: false
            }

        default: 
            return state
    }
}

export default auth