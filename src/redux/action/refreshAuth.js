export const  BEGINS_REFRESH_AUTH = 'BEGINS_REFRESH_AUTH'
export const SUCCESS_REFRESH_AUTH = 'SUCCESS_REFRESH_AUTH'
export const FAILURE_REFRESH_AUTH = 'FAILURE_REFRESH_AUTH'


export const beginRefreshAuth = () => {
    return {
        type: BEGINS_REFRESH_AUTH
    }
}

export const successRefreshAuth = (result) =>{
    return {
        type: SUCCESS_REFRESH_AUTH,
        payload: result
    }
}

export const failedRefreshAuth = (error) =>{
    return {
        type: FAILURE_REFRESH_AUTH,
        payload: error
    }
}