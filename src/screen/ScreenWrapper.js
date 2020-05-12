import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {persistor} from '../redux/store'
import SignupForm from '../components/signupModal'
import ImageDetails from '../screen/ImageDetails'
import UploadScreen from '../screen/UploadScreen'
import LoginForm from '../components/Login'
import UploadForm from '../components/UploadForm'


import '../styles/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ImageList from './ImageList'
import logoutDispatch from '../redux/action/logoutThunk'
import refreshTokenThunk from '../redux/action/refreshTokenThunk'



function ScreenWrapper() {

  const [openLoginModal, setOpenLogininModal] = useState(false)
  const [openSignupModal, setOpenSignupModal] = useState(false)
  const [openUploadFormModal, setOpenUploadFormModal] = useState(false)

  const {isAuth, refreshToken, userId, token, expiresIn} = useSelector(store => store.auth)
  const dispatch = useDispatch()

  // this useEffect prevent logininModal from being true when user click logout
  useEffect(()=>{
      setOpenLogininModal(false)
  }, [isAuth])


  const dispatchRefresh = ()=>{
    dispatch(refreshTokenThunk(refreshToken, userId))
  }

    

useEffect(()=>{
    // create new valid token when the expiration time has passed
    if(refreshToken){
      let newTokenTimeout
      const expirationDate = new Date(parseInt(expiresIn)).getTime()
      const currentDate = Date.now()
      if(currentDate > expirationDate){
        newTokenTimeout = setTimeout(dispatchRefresh, 100)
        return ()=> clearTimeout(newTokenTimeout)
      }
    }
}, [])

  useEffect(()=> {
    /// refreshToken setInterval
  //set setInterval for to get new token after successfully logIn
    if(refreshToken){
      let timeoutId = setInterval(dispatchRefresh, 720000)
      return ()=> clearTimeout(timeoutId)
    }
  }, [refreshToken])

  const handleLoginModal = () =>{
    if(openLoginModal){
      dispatch({type: 'CLEAR_ERROR'})
      setOpenLogininModal(false)
    }else{setOpenLogininModal(true)}
  }

  const handleSignupModal = () =>{
    if(openSignupModal){
      dispatch({type: 'CLEAR_ERROR'})
      setOpenSignupModal(false)

    }else{setOpenSignupModal(true)}
  }

  const handleUploadModal = () =>{
    if(openUploadFormModal){
      dispatch({type: 'CLEAR_ERROR'})
      setOpenUploadFormModal(false)
    }else{
    setOpenUploadFormModal(true)
    }
  }

  const signout = ()=>{
    persistor.purge()
    dispatch(logoutDispatch(token))
    
  }

  let loginAndSignup = (<div className='logout-and-signin'>
    <ul>
    <li className="login nav-box" onClick={handleLoginModal}>Login</li>
    <li className="sign-up nav-box" onClick={handleSignupModal}>Signup</li>
    </ul>
  </div>)

  return (
        <div>
        <nav className='nav-wrapper'>
            <NavLink className='website-name' to='/'>gidiShare</NavLink>
            {isAuth ? <div className="logout nav-box" onClick={signout}>Logout</div> : loginAndSignup}
        </nav>

        <div className='main-body'>
        <section className={(openSignupModal ? 'signup-modal-open' : 'signup-modal-close')}>
          <SignupForm handleSignup={handleSignupModal} />
        </section>

        <section className={(openLoginModal ? 'login-modal-open' : 'login-modal-close')}>
          <LoginForm handleLogin={handleLoginModal}/>
        </section>

        <section className={(openUploadFormModal ? 'upload-open' : 'upload-close')}>
          <UploadForm handleUpload={handleUploadModal} />
        </section>

        <Switch>
        
          <Route path="/details/:id" exact render={props => <ImageDetails handleLogin={handleLoginModal} handleUploadForm={handleUploadModal} {...props} />} />/>
          <Route path="/upload" exact component={UploadScreen} />
          <Route path='/' exact render={props => <ImageList handleLogin={handleLoginModal} handleUploadForm={handleUploadModal} {...props} />} />/>
        </Switch>
        </div>
    </div>
  )
}

export default ScreenWrapper;
