import { LOGIN_FAIL } from "./login";

export const LOGOUT_START = 'LOGOUT_START'; export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'; export const LOGOUT_FAIL = 'LOGOUyAIL'

export const logoutStart = ()=>{
    return {
        type: LOGOUT_START
    }
}

export const logoutSuccess = (isLogout)=>{
    return {
        type: LOGOUT_SUCCESS,
        payload: isLogout
    }
}

export const logoutFail = (error)=>{
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}