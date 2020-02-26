export const THUMP_BEGIN = 'THUMP_BEGIN'; export const THUMP_DOWN = 'THUMP_DOWN'; export const THUMP_UP = 'THUMP_UP'
export const UPDATE_SINGLE_IMAGE_THUMP_UP = 'UPDATE_SINGLE_IMAGE_THUMP_UP'
export const UPDATE_SINGLE_IMAGE_THUMP_DOWN = 'UPDATE_SINGLE_IMAGE_THUMP_DOWN'

export const thumpBegin = () =>{
    return {
        type: THUMP_BEGIN 
    }
}


export const thumpDown = (thumpData) =>{
    return {
        type: THUMP_DOWN,
        payload: thumpData
    }
}


export const thumpUp = (thumpData) =>{
    return {
        type: THUMP_UP,
        payload: thumpData
    }
}

export const updateSingleImageThumpUp = (updateData)=>{
    return {
        type: UPDATE_SINGLE_IMAGE_THUMP_UP,
        payload: updateData
    }
}

export const updateSingleImageThumpDown = (updateData)=>{
    return {
        type: UPDATE_SINGLE_IMAGE_THUMP_DOWN,
        payload: updateData
    }
}