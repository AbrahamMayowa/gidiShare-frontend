export const START_FETCH_LIST = 'START_FETCH_LIST'
export const SUCCESS_FETCH_LIST = 'SUCCESS_FETCH_LIST'
export const FAIL_FETCH_LIST = 'FAIL_FETCH_LIST'

export const startFetchList = () =>{
    return {
        type: START_FETCH_LIST
    }
}

export const successFetchList = (result) =>{
    return {
        type: SUCCESS_FETCH_LIST,
        payload: result
    }
}

export const failFetchList = (error) =>{
    return {
        type: FAIL_FETCH_LIST,
        payload: error
    }
}

