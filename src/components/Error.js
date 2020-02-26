import React from 'react'
import '../styles/error.css'

const Error = (props)=>{
    return (
        <div className='error-page'>
            {props.error}
        </div>
    )
}

export default Error