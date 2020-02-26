import {START_FETCH_LIST, FAIL_FETCH_LIST, SUCCESS_FETCH_LIST} from '../action/imageListAction'
import {THUMP_DOWN, THUMP_UP, THUMP_BEGIN} from '../action/thumpAction'

const initialState = {
    loading: false,
    images: [],
    error: ''
}

const imagesReducer = (state=initialState, action) => {
    switch(action.type){
        case THUMP_BEGIN:
            return {
                ...state,
                loading: true
            }

        case THUMP_UP:
            const updateImages = [...state.images]
            const imageIndex = updateImages.findIndex(p => p.imageId.toString() === action.payload.data.thumpUpMutation.imageId.toString())
            if(imageIndex > -1){
                updateImages[imageIndex].thumpUp = action.payload.data.thumpUpMutation.thumpUp
                updateImages[imageIndex].thumpDown = action.payload.data.thumpUpMutation.thumpDown
            }
            return{
                ...state,
                images: updateImages,
                loading: false

            }

        case THUMP_DOWN:
            const updateImagesDown = [...state.images]
            const imageDownIndex = updateImagesDown.findIndex(p => p.imageId.toString() === action.payload.data.thumpDownMutation.imageId.toString())
            if(imageDownIndex > -1){
                updateImagesDown[imageDownIndex].thumpUp = action.payload.data.thumpDownMutation.thumpUp
                updateImagesDown[imageDownIndex].thumpDown = action.payload.data.thumpDownMutation.thumpDown
            }
            return{
                ...state,
                images: updateImagesDown,
                loading: false

            }


        case START_FETCH_LIST:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_FETCH_LIST:
            return{
                ...state,
                loading: false,
                images: action.payload.images.data.imageList
            }
        case FAIL_FETCH_LIST:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message
            }
        default:
            return state

    }
}

export default imagesReducer