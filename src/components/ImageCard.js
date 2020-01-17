import React from 'react'
import avatar from '../../public/avatar.svg'
import Cookies from 'js-cookie'


const ImageCard = (props) =>{
    
    const image = props.image
    let thumpUpUser = null
    let thumpDownUser = null
    // check for the refreshToken to check authenticated user
    if(Cookies.get('refreshToken')){
        const cookieId = Cookies.get('refreshToken').userId
        // only thumped up image is looped
        if(image.thumpup.thumpUpCount > 0){
            thumpUpUser = image.thumpup.userActionThumpUp.find(id => id === cookieId)
        }

        if(image.thumpdown.thumpDownCount > 0){
            thumpDownUser = image.thumpdown.userActionThumpDown.find(id => id === cookieId)
        }
    }


    return(
            <div>
                 <section className='creator'>
                    <img src={`http://localhost:5000/${image.creator.imageUrl}`}/>
                    <div className='username'>{image.creator.username}</div>
                </section>
                    

                <section className='image-url'>
                    <img src={image.imageUrl} />
                </section>

                <section className='data-description'>
                    <div className={'thump-count ' + thumpUpUser ? 'thumped' : ''}>
                        {image.thumpup.thumpUpCount}
                    </div>

                    <div className={'thump-count ' + thumpDownUser ? 'thumped' : ''}>
                        {image.thumpdown.thumpDownCount}
                    </div>
                    
                    <div className='time-category'>
                        <span>{image.createdAt.toISOString()}</span>
                        <span>{image.category}</span>
                    </div>
                </section>
            </div>
        )
}

export default ImageCard