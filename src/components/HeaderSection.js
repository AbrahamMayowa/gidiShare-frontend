import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import '../styles/header.css'
import { store } from '../redux/store'


const Header = (props)=>{
    const [search, setSearch] = useState('')
    const [userImageUrl, setUserImageUrl] = useState('')
    const auth = useSelector(store => store.auth)
    let history = useHistory()

    const handleSearchSubmit = () =>{
        if(search.trim().length > 0){
            // send query for the search
        }
        /// set feedback messages from the parent component
    }

    const handleRedirect = () =>{
        
            //props.handleUpload()
         
            history.push("/upload")
    }

    useEffect(() =>{
        const propsImage = props.userImageUrl
        let userImage = "/avatar.svg"
        if(propsImage){
            userImage = propsImage
        }
        setUserImageUrl(userImage)
        
    }, [props.userImageUrl])


    
    return(
        <div className='header'>
            <div className='header-image'>
                <img src={userImageUrl} />
            </div>
            <div className='search-header'>
                <form onSubmit={handleSearchSubmit}>
                    <input placeholder='Search for image' type='text' onChange={(e) => setSearch(e.target.value)}/>
                </form>
            </div>

            <div className='share-image' onClick={handleRedirect}>
            <i className="fas fa-upload header-icon"></i>
            <div className='photo-string'>Upload</div>
            </div>
        </div>
    )
}

export default Header