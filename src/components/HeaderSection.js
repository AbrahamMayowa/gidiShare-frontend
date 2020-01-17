import React, {useState} from 'react'
import avatar from '../../public/avatar.svg'


const Header = (props)=>{
    const [search, setSearch] = useState('')

    const handleSearchSubmit = () =>{
        if(search.trim().length > 0){
            // send query for the search
        }

        /// set feedback messages from the parent component
    }

    const propsImage = props.image
    let userImage = avatar
    if(propsImage){
        userImage = `http://localhost:5000/${propsImage}`
    }
    return(
        <div className='header'>
            <img src={userImage} />
            <div className='search-header'>
                <form onSubmit={handleSearchSubmit}>
                    <input type='text' onChange={(e) => setSearch(e.target.value)}/>
                </form>
            </div>

            <div className='share-image'>Share Image</div>
        </div>
    )
}

export default Header