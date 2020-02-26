import {SINGLE_IMAGE_FETCH_FAILS, SINGLE_IMAGE_FETCH_STARTS, SINGLE_IMAGE_FETCH_SUCCESS} from '../action/singleImage'
import {UPLOAD_FAIL, UPLOAD_STARTS, UPLOAD_SUCCESS} from '../action/uploadAction'
import {UPDATE_SINGLE_IMAGE_THUMP_DOWN, UPDATE_SINGLE_IMAGE_THUMP_UP} from '../action/thumpAction'

const initialState = {
    loading: false,
    error: '',
    imageId: '',
    imageUrl: '',
    creator: {},
    description: '',
    category: '',
    createdAt: null,
    thumpUp: {
        thumpUpCount: null,
        userActionThumpUp: []
    },
    thumpDown: {
        thumpUpCount: null,
        userActionThumpUp: []
    },
    success: false

}

const singleImageReducer = (state=initialState, action) =>{
    switch(action.type){
        case SINGLE_IMAGE_FETCH_STARTS:
            return {
                ...state,
                loading: true
            }
        case SINGLE_IMAGE_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                imageUrl: action.payload.result.data.singleImage.imageUrl,
                imageId: action.payload.result.data.singleImage.imageId,
                creator: action.payload.result.data.singleImage.creator,
                description: action.payload.result.data.singleImage.description,
                category: action.payload.result.data.singleImage.category,
                createdAt: action.payload.result.data.singleImage.createdAt,
                thumpUp: action.payload.result.data.singleImage.thumpUp,
                thumpDown: action.payload.result.data.singleImage.thumpDown,
                success: true
            }
        case SINGLE_IMAGE_FETCH_FAILS:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
                success: false
            }

        case UPLOAD_STARTS:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case UPLOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                imageUrl: action.payload.result.data.uploadImage.imageUrl,
                imageId: action.payload.result.data.uploadImage.imageId,
                creator: action.payload.result.data.uploadImage.creator,
                description: action.payload.result.data.uploadImage.description,
                category: action.payload.result.data.uploadImage.category,
                createdAt: action.payload.result.data.uploadImage.createdAt,
                thumpUp: action.payload.result.data.uploadImage.thumpUp,
                thumpDown: action.payload.result.data.uploadImage.thumpDown,
                success: true
            }
        case UPLOAD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
                success: false
            }

        case UPDATE_SINGLE_IMAGE_THUMP_UP:
            const thumpUpMutation = action.payload.data.thumpUpMutation
            return{
                ...state,
                imageId: thumpUpMutation.imageId,
                thumpUp: thumpUpMutation.thumpUp,
                thumpDown: thumpUpMutation.thumpDown,
                loading: false
            }
        case UPDATE_SINGLE_IMAGE_THUMP_DOWN:
            const thumpDownMutation = action.payload.data.thumpDownMutation
            return {
                ...state,
                imageId: thumpDownMutation.imageId,
                thumpUp: thumpDownMutation.thumpUp,
                thumpDown: thumpDownMutation.thumpDown,
                loading: false
            }
        default:
            return state
            
    }
}

export default singleImageReducer