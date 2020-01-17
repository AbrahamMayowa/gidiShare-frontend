import {failFetchList, startFetchList, successFetchList} from './imageListAction'

const imageListThunk = () => {
    return async (dispatch) => {
        dispatch.startFetchList()

        const graphqlQuery = {
            query: `
            query images{
                imageList {
                    imageUrl
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

        })
    } 
}