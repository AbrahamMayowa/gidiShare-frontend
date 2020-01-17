export const CREATE_USER_START = 'CREATE_USER_START'

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'

export const CREATE_USER_FAIL = 'CREATE_USER_FAIL'

export const createUserStartDispatch = () =>{
    return {
        type: CREATE_USER_START
    }
} 

export const createUserSuccessDispatch = (userData) =>{
    return {
        type: CREATE_USER_SUCCESS,
        payload: userData
    }
} 

export const createUserFailDispatch = (error) =>{
    return {
        type: CREATE_USER_FAIL,
        payload: error
    }
}