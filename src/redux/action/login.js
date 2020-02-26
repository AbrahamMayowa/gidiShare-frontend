export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'


export const loginStart = () =>{
    return {
        type: LOGIN_START
    }
}


export const loginSuccess = (result) =>{
    return {
        type: LOGIN_SUCCESS,
        payload: result

    }
}


export const loginFail = (loginError) =>{
    return {
        type: LOGIN_FAIL,
        payload: {loginError}
    }
}


