import {failFetchList, startFetchList, successFetchList} from './imageListAction'

const imageListThunk = () => {
    return async (dispatch) => {
        try{
        dispatch(startFetchList())
        const graphqlQuery = {
            query: `
            query images{
                imageList {
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
                        userActionThumpDown {
                            _id
                        }
                    }

                }

            }
            `
        }
        const response = await fetch('http://localhost:5000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(graphqlQuery)
        })

        const resData = await response.json()
        console.log(resData)

        if(resData.errors){
            if(resData.errors[0].status === 404){
                throw new Error('No image found')
            }
            throw new Error('A server error occured')
        }

        dispatch(successFetchList(resData))
        //console.log(resData)
    }catch(error){
        dispatch(failFetchList(error))
        console.log(error)
    }



    } 
}

export default imageListThunk