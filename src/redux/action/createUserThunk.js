import {createUserFailDispatch, createUserStartDispatch, createUserSuccessDispatch} from './createUserAction'


const createUserThunk = (username, password, image) =>{
    const formData = new FormData()
    formData.append('password', password)
    formData.append('username', username)
    formData.append('image', image)
    return async dispatch => {
        try{
        dispatch.createUserStartDispatch()
        const res = await fetch('http://localhost:5000/api/create-user', {
            method: 'PUT',
            body: formData

        })
        if(!res.ok){
            if(res.status === 422){
                throw new Error('Invalid Input')
            }
            throw new Error('An error occured')
        }

        const data = await res.json()

        dispatch.createUserSuccessDispatch(data)
        
        }catch(error){
            dispatch.createUserFailDispatch(error)
        }
    }
}