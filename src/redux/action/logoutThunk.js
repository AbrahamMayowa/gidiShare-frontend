import {logoutFail, logoutSuccess, logoutStart} from './logout'


const logoutDispatch = (token)=>{
    return async dispatch =>{
        const graphqlQuery = {
            query: `
            mutation {
                logout
            }`
        }

        try{
            dispatch(logoutStart())
    const fetchResponse = await fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token   
        },
        body: JSON.stringify(graphqlQuery)
    })
    const resData = await fetchResponse.json()
    if(resData.errors){
    if(resData.errors[0].status === 401){
        throw Error('You are not authorized')
    }
    throw Error('User not found')
    }
    dispatch(logoutSuccess(resData))
    }catch(error){
        dispatch(logoutFail(error))
    }

    }
}

export default logoutDispatch