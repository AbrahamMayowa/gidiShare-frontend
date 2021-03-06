import React, { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Formik} from 'formik'
import Loading from '../components/Loading'
//import '../styles/signup.css'
import '../styles/uploadForm.css'
import uploadThunk from '../redux/action/uploadThunk'
import TextareaAutosize from 'react-autosize-textarea'
import imageListThunk from '../redux/action/imageListActionThunk'
import SyncLoader from '../components/SyncLoader' 

const UploadImage = (props) => {
   const dispatch = useDispatch()
   const SingleData = useSelector(store => store.singleImage)
   const token = useSelector(store => store.auth.token)
   const {error, success, loading, imageId} = SingleData
   const [uploadData, setUploadData] = useState({
       category: {error: '', value: ''},
       description: {error: '', value: ''},
       image:{error: '', value: null}
    })

    const handleChange = (event)=>{
        event.persist()
        const target = event.target;
            if(target.name === 'category'){
                if(!target.value){
                    setUploadData(prevState => ({
                        ...prevState,
                        category: {error: 'Category is required', value: '',}
                    }))
                }else{
                    setUploadData(prevState =>({
                        ...prevState,
                        category: {error: '', value: target.value}
                    }))
                }
            }else if(target.name === 'description'){
                if(!target.value){
                    setUploadData(prevState =>({
                        ...prevState,
                        description:{error: 'Description is required', value: ''}
                    }))
                }else{
                    setUploadData(prevState => ({
                        ...prevState,
                        description: {error: '', value: target.value}
                    }))
                }
            }

            else if(target.name === 'image'){
                
                if(!target.files[0]){
                    setUploadData(prevState =>({
                        ...prevState,
                        image: {error: 'Image is required', value: ''}
                    }))
                }else if(target.files[0]){
                    const supportedImageType = ['image/png', 'image/jpeg', 'image/jpg']
                    if(!supportedImageType.includes(target.files[0].type)){
                        setUploadData(prevState =>({
                            ...prevState,
                            image: {error: 'Only png, jpeg or jpg image mimetype is supported'}
                        }))
                    }else{
                    setUploadData(prevState => ({
                        ...prevState,
                        image: {error: '', value: target.files[0]}
                    }))
                }
                }

        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        const {category, description, image} = {...uploadData}
        if(!category.value){
            setUploadData(prevState =>({
                ...prevState,
                category: {error: 'Category is required', value: ''}
            }))
        }else if(!description.value){
            setUploadData(prevState =>({
                ...prevState,
                description: {error: 'description is requird', value: ''}
            }))
        }else if(!image.value){
            setUploadData(prevState =>({
                ...prevState,
                image: {error:'Upload a supported photo format', value: ''}
            }))
        }else if(category.value && description.value && image.value && token){
            dispatch(uploadThunk(image.value, description.value, category.value, token))
        }
    }
    return (
        <div className='upload-wrapper'>
        <div className="form-main">
            {!token && <div className='login-warning'>You need to login to upload image. Kindly login now.</div>}
            <div className='upload'>Upload Photo</div>
            
            <form onSubmit={handleSubmit} className='form-control'>
                <div className='category-wrapper'>
                        <select name="category" onChange={handleChange} className='category'>
                        <option value="" disabled selected>Image Category</option>
                            <option value="love">Love</option>
                            <option value="celebration">Celebration</option>
                            <option value="happiness">Happiness</option>
                            <option value="sadness">Sadness</option>
                            <option value='throwback'>ThrowBack</option>
                            <option value="general">General</option>
                        </select>

                <div className='form-error'>
                    {uploadData.category.error ? 
                    (<div>{uploadData.category.error}</div>): null}
                </div>
                </div>

                <div className='description-wrapper'>
                    <textarea name='description' onChange={handleChange} className='description'>Caption</textarea>
                </div>
                <div className='form-error'>
                    {uploadData.description.error ? (
                        <div>{uploadData.description.error}</div> 
                    ): null}
                </div>

                <div className='image-upload'>
                    <input
                        id='image'
                        name='image'
                        type='file'
                        onChange={handleChange}
                    />
                   
                </div>
                <div className='form-error'>
                {uploadData.image.error ? uploadData.image.error : null }
                </div>
        
                    <button className='upload-submit' disabled={loading ? true : false} type='submit'>{loading ? <div style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}><SyncLoader /></div> : 'Submit'}</button>
            </form>
            {error && (<div className='reducer-error'>{error}</div>)}
        </div>
        </div>
    )
}

export default UploadImage