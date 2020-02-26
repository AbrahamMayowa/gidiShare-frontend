import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Formik} from 'formik'
import createUserThunk from '../redux/action/createUserThunk'
import SyncLoader from './SyncLoader'
import '../styles/signup.css'
import { store } from '../redux/store'

const SignupForm = ({handleSignup}) => {
   const dispatch = useDispatch()
   const authData = useSelector(store => store.auth)
   const {error, success, loading} = authData

    const validate = values => {
        const errors = {}
        
        if(!values.username){
                errors.username = 'Username is required'
            }else if(values.username.length < 4){
                errors.username = 'Username should be at least four characters long'
            }else if(!values.password){
                errors.password = 'Password is required'
            }else if(values.password.length < 4){
                errors.password = 'Password should be at least four characters long'
            }else if(!values.image){
                errors.image = 'Image is required'
            }else if(values.image){
                const imageExt = values.image.name.split('.')
                const ext = imageExt[imageExt.length-1]
                const supportedFormat = ['png', 'jpg', 'jpeg']
                if(!supportedFormat.includes(ext)){
                errors.image = "The uploaded image is not in a supported image format"
                }
        }

        return errors
    }

    return (
    <Formik
        initialValues = {{
            password: '',
            username: '',
            image: null
        }}
        validate = {validate}
        onSubmit= {values => dispatch(createUserThunk(values.username, values.password, values.image))}
        >
        
        {props => (
        <div className="form-wrapper">
        <div className="form_control">

            <div className='signup'>SIGNUP</div>



            
            <form onSubmit={props.handleSubmit}>
                <div className='username-wrapper'>
                    <label htmlFor='username' />
                    <i className="fa fa-user icon"></i>
                    <input
                        id='username'
                        name='username'
                        type='text'
                        placeholder='Username'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        values={props.values.username}
                    />
                </div>
                <div className='form-error'>
                    {props.touched.username && props.errors.username ? 
                    (<div>{props.errors.username}</div>): null}
                </div>

                <div className='password-wrapper'>
                    <label htmlFor='password' />
                    <i className="fa fa-key icon"></i>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Password'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />
                   
                </div>
                <div className='form-error'>
                    {props.touched.password && props.errors.password ? (
                        <div>{props.errors.password}</div>
                    ): null}
                </div>

                <div className='image-wrapper'>
                    <i className="fas fa-upload icon"></i>
                    <label htmlFor='image' className='customed-upload'>
                    <input
                        id='image'
                        name='image'
                        type='file'
                        onChange={(event) =>{
                            props.setFieldValue("image", event.currentTarget.files[0]);
                        }}
                        onBlur={props.handleBlur}
                    />
                    <div className='upload-label'>Upload image</div>

                    </label>
                   
                </div>
                <div className='form-error'>
                {props.touched.image && props.errors.image ? 
                props.errors.image : null }
                
                {props.values.image && (<div className='image-name'>{props.values.image.name}</div>)}
                </div>
                <div className='cancel-signup-wrapper'>
                    <div className='cancel-signup' onClick={handleSignup}>Cancel</div>
                    <button className='signup-submit' type='submit'>{loading ? <div className='load'><SyncLoader /></div> : 'Submit'}</button>
                  
                </div>
            </form>
            {error && (<div className='reducer-error'>{error}</div>)}
            {success && (<div className='reducer-success'>You have successfully created an account</div>)}
        </div>
    </div>
        )}
    </Formik>
    )
}

export default SignupForm