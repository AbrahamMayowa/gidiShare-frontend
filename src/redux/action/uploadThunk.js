import {uploadFail, uploadStarts, uploadSuccess} from './uploadAction'


const uploadThunk = (image, description, category, token) =>  {
    return async dispatch => {
        try{
        dispatch(uploadStarts())
        const formData = new FormData()
        formData.append('image', image)
        const imageFileSave = await fetch('/api/upload', {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: formData

        })

        if(!imageFileSave.ok){
            if(imageFileSave.status === 401){
                throw new Error('Please log in to upload image')
            }
            throw new Error('A server error occured')
        }

        const imageData = await imageFileSave.json()

        // the graphql for storing the image in the db
        const graphqlQuery = {
            query: `
            mutation uploadMutation($imageUrl: String!, $description: String!, $category: String!){
                uploadImage(imageUrl: $imageUrl, description: $description, category: $category){
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
                imageUrl: imageData.imageUrl,
                description: description,
                category: category
            }
        }
        const graphqlResponse = await fetch('/graphql', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(graphqlQuery)
        })

        const resData = await graphqlResponse.json()
        if(resData.errors){
            if(resData.errors[0].status === 401){
                throw new Error('You need to log in')
            }
            throw new Error('Please provide valid input')
        }

        dispatch(uploadSuccess(resData))
    }catch(error){
        dispatch(uploadFail(error))
    }


    }
}

export default uploadThunk