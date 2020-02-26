import {singleImageFails, singleImageStarts, singleImageSuccess} from './singleImage'


const singleImageFetch = id =>{
    return async dispatch => {
        try{
        dispatch(singleImageStarts())

        const graphqlQuery = {
            query:`
            query single($_id: ID!){
                singleImage(_id: $_id){
                    imageUrl
                    imageId
                    creator {
                        username
                        imageUrl
                    }
                    description
                    category
                    createdAt
                    thumpUp {
                        thumpUpCount
                        userActionThumpUp {
                            _id
                        }
                    }
                    thumpDown {
                        thumpDownCount
                        userActionThumpDown{
                            _id
                        }
                    }  
                }
            }`,
            variables: {
                _id: id
            }
        }

        const response = await fetch('http://localhost:5000/graphql',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(graphqlQuery)
        })

        const data = await response.json()
        if(data.errors){
            if(data.errors[0].status === 404){
                throw new Error('The selected image is not found')
            }
            throw new Error('A server error occured')
        }

        dispatch(singleImageSuccess(data))
        }catch(error){
            dispatch(singleImageFails(error))
        }
    }

}

export default singleImageFetch
