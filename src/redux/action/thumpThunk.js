import {thumpDown, thumpUp, updateSingleImageThumpDown, updateSingleImageThumpUp} from './thumpAction'


const thumpThunk = (imageId, token, thumpUpResolver = true)=>{

    return async dispatch =>{ 
        //dispatch(thumpBegin())

    // thumpUpResolver is true if the thunk will make a fetch request to thumpUpMutation
    let graphqlQuery

    if(thumpUpResolver){
        graphqlQuery = {
            query: `
            mutation thumpUp($imageId: ID!){
                thumpUpMutation(imageId: $imageId){
                    thumpUp{
                        thumpUpCount
                        userActionThumpUp{
                            _id
                        }
                    }

                    imageId
                    thumpDown{
                        thumpDownCount
                        userActionThumpDown{
                            _id
                        }
                    }

                }
            }`,
            variables:{
                imageId:imageId
            }
        }

    }else{
        graphqlQuery = {
            query: `
            mutation thumpDown($imageId: ID!){
                thumpDownMutation(imageId: $imageId){
                    thumpUp{
                        thumpUpCount
                        userActionThumpUp{
                            _id
                        }
                    }
                    imageId
                    thumpDown{
                        thumpDownCount
                        userActionThumpDown{
                            _id
                        }
                    }

                }
            }`,
            variables:{
                imageId
            }

        }
    }

    try{

        const response = await fetch('/graphql',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(graphqlQuery)
        })

        const resData = await response.json()
        if(resData.errors){
            if(resData.errors[0].status === 401){
                throw Error('You are not authorized')
            }
            throw Error('Image not found')
        }

        //check if the resolve if for thump up mutation
        if(thumpUpResolver){
            dispatch(updateSingleImageThumpUp(resData))
            dispatch(thumpUp(resData))
        }else{
            dispatch(updateSingleImageThumpDown(resData))
            dispatch(thumpDown(resData))
        }
    }catch(error){
        console.log(error)
        //dispatch(thumpFail(error))
    }
}
}

export default thumpThunk