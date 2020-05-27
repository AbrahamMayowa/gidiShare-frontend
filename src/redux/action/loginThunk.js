import {loginFail, loginStart, loginSuccess} from './login'


const loginActionThunk = (username, password) =>{
    return async dispatch => {
        dispatch(loginStart())

        const graphqlQuery = {
            query: `
            mutation loginMutation($username: String!, $password: String!){
                login(username: $username, password: $password){
                    token
                    refreshToken
                    userId
                    expiresIn
                    username
                    imageUrl
                }
            }`,

            variables: {
                username,
                password
            }
        }

        try{
        const response = await fetch('/graphql', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(graphqlQuery)

        })

        const resData = await response.json()
    
        if(resData.errors){
            if(resData.errors[0].status === 404){
                throw new Error('Invalid password or username')
            }
            throw new Error('A server error occured!')
        }

        dispatch(loginSuccess(resData))
    }catch(error){
        dispatch(loginFail(error))
    }
    }
}

export default loginActionThunk