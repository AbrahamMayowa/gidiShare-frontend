import {beginRefreshAuth, successRefreshAuth, failedRefreshAuth} from '../action/refreshAuth'


const fetchRefreshToken = (token, id) =>{
    return async (dispatch) => {

        try{
        dispatch(beginRefreshAuth())

        const graphqlQuery = {
            query: `
            mutation refresh($refreshToken: String!, $userId: ID!){
                refreshToken(refreshToken: $refreshToken, userId: $userId){
                    expiresIn
                    token
                    username
                    imageUrl
                }
            }
            `,
            variables: {
                refreshToken: token,
                userId: id
            }
        }
        const resFetch = await fetch('http://localhost:5000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(graphqlQuery)
        })

        const data = await resFetch.json()

        if(data.errors){
            if(data.errors[0].status === 401){
                throw new Error('Please log in to your account')
            }
            throw new Error('The login user is not exist')
        }
        
        dispatch(successRefreshAuth(data))  
    }catch(error){
        dispatch(failedRefreshAuth(error))
    }
}
}

export default fetchRefreshToken