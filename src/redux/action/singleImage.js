export const SINGLE_IMAGE_FETCH_STARTS = 'SINGLE_IMAGE_FETCH_STARTS'
export const SINGLE_IMAGE_FETCH_SUCCESS = 'SINGLE_IMAGE_FETCH_SUCCESS'
export const SINGLE_IMAGE_FETCH_FAILS = 'SINGLE_IMAGE_FETCH_FAILS'


export const singleImageStarts = () =>{
    return {
        type: SINGLE_IMAGE_FETCH_STARTS
    }
}

export const singleImageSuccess = (result) =>{
    return {
        type: SINGLE_IMAGE_FETCH_SUCCESS,
        payload: {result}
    }
}


export const singleImageFails = (error) =>{
    return {
        type: SINGLE_IMAGE_FETCH_FAILS,
        payload: {error}
    }
}