import {createUserFailDispatch, createUserStartDispatch, createUserSuccessDispatch} from './createUserAction'


const createUserThunk = (username, password, image) =>{
    const formData = new FormData()
    formData.append('image', image)
    return async dispatch => {
        try{
        dispatch(createUserStartDispatch())
        console.log('starting')
        const res = await fetch('http://localhost:5000/api/create-user', {
            method: 'POST',
            body: formData

        })
        if(!res.ok){
            if(res.status === 422){
                throw new Error('Invalid Input')
            }
            throw new Error('An error occured')
        }

        const data = await res.json()

        const imageUrl = data.imageUrl
        const imagePath = data.imagePath

        const graphqlQuery = {
            query: `
            mutation createFunc($username: String!, $password: String!, $imageUrl: String!, $imagePath: String!){
                createUser(userData: {username: $username, password: $password, imageUrl: $imageUrl, imagePath: $imagePath}){
                    token
                    refreshToken
                    userId
                    expiresIn
                    username
                    imageUrl
                }
            }
            `,
            variables: {
                username,
                password,
                imageUrl,
                imagePath,
            }
        }

        const graphResponse = await fetch('http://localhost:5000/graphql', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(graphqlQuery)
        })

        const queryResponseJson = await graphResponse.json()
        if(queryResponseJson.errors){
            if(queryResponseJson.errors[0].status === 422){
                throw new Error(queryResponseJson.errors[0].message)
            }
            throw new Error('A server error occured!')
        }

        dispatch(createUserSuccessDispatch(queryResponseJson))
        }catch(error){
            dispatch(createUserFailDispatch(error))
        }
    }
}

export default createUserThunk