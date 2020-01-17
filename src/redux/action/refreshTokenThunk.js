import {beginRefreshAuth, successRefreshAuth, failedRefreshAuth} from '../action/refreshAuth'


const fetchRefreshToken = () =>{
    return async (dispatch) => {

        try{
        dispatch.beginRefreshAuth()
        const resFetch = await fetch('http://localhost:5000/api/refreshToken', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!resFetch.ok){
            if(resFetch.status === 401){
                throw new Error('Not authenticated')
            }
            throw new Error('User not found')
        }

        const data = await resFetch.json()
        dispatch.successRefreshAuth(data)  
    }catch(error){
        dispatch.failedRefreshAuth(error)
    }
}
}

export default fetchRefreshToken