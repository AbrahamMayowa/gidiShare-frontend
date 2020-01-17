import {CREATE_USER_FAIL, CREATE_USER_START, CREATE_USER_SUCCESS} from '../action/createUserAction'


const initialState = {
    loading: false,
    username: '',
    imageUrl: '',
    error: ''


}
export default createReducer = (state=initialState, action) =>{
    switch(action.type){
        case CREATE_USER_START:
            return {
                ...state, loading: true
            }
        case CREATE_USER_SUCCESS:
            // the user username and imageUrl store in the session, and if the component is later mount,
            //will retrive it, and update the local state
            sessionStorage.setItem('username', action.payload.username)
            sessionStorage.setItem('imageUrl', action.payload.imageUrl)
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('tokenExpiresIn', action.payload.expiresIn)
            return {
                ...state,
                loading: false,
                username: action.payload.username,
                imageUrl: action.payload.imageUrl

            }

        case CREATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        default:
            return state
    }
}
