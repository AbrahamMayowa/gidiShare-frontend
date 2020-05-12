import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Formik} from 'formik'
import SyncLoader from './SyncLoader'
import loginActionThunk from '../redux/action/loginThunk'
import '../styles/signup.css'


const LoginForm = ({handleLogin}) => {

    const authData = useSelector(store => store.auth)
    const {error, success, loading} = authData


/*


        N0TE
        SIGNUPMODAL COMPONENT'S CSS STYLING IS USED FOR THIS COMPONENT
*/
   const dispatch = useDispatch()

   const handleLoginModal = ()=>{
       //close the loginModal
       if(success){
           handleLogin()
       }
   }



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

        }

        return errors
    }
   
    return (
    <div>
    <Formik
        initialValues = {{
            password: '',
            username: ''
        }}
        validate = {validate}
        onSubmit= {values => dispatch(loginActionThunk(values.username, values.password))}>
        
        {props => (
        <div className="form-wrapper">
        <div className="form_control">

            <div className='signup'>Login</div>
            
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

                <div className='cancel-signup-wrapper'>
                    <div className='cancel-signup' onClick={handleLogin}>Cancel</div>
                    <button className='signup-submit' onClick={handleLoginModal} type='submit'>{loading ? <div className='load'><SyncLoader /></div> : 'Submit'}</button>
                   
                </div>
                {error && (<div className='reducer-error'>{error}</div>)}
            </form>
        </div>
    </div>
        )}
    </Formik>

   
    </div>
    )
    }

export default LoginForm