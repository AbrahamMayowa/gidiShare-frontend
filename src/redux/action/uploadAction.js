export const UPLOAD_STARTS = 'UPLOAD_STARTS'
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'
export const UPLOAD_FAIL = 'UPLOAD_FAIL'


export const uploadStarts = () => {
    return {
        type: UPLOAD_STARTS
    }
}

export const uploadSuccess = (result) => {
    return {
        type: UPLOAD_SUCCESS,
        payload: {result}
    }
}

export const uploadFail = (error ) =>{
    return {
        type: UPLOAD_FAIL,
        payload: {error}
    }
}               