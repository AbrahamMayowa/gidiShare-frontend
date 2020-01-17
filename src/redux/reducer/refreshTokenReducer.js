import {SUCCESS_REFRESH_AUTH, FAILURE_REFRESH_AUTH} from '../action/refreshAuth'

const initialState = {
    error: ''
}

export default refreshReducer = (state=initialState, action) =>{
    switch(action.type){
        case SUCCESS_REFRESH_AUTH:
            sessionStorage.setItem('username', action.payload.username)
            sessionStorage.setItem('imageUrl', action.payload.imageUrl)
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('tokenExpiresIn', action.payload.expiresIn)
            return {
                ...state
            }

        case FAILURE_REFRESH_AUTH:
            return {
                error: action.payload.error
            }
    }
}