import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import '../styles/imageCard.css'
import moment from 'moment'


const ImageCard = (props) =>{
    const authError = useSelector(store => store.images.error) 
    const userId = useSelector(store => store.auth.userId)
    useEffect(()=>{
        if(authError === 'You are not authorized'){
            props.handleLogin()
        }
    }, [authError])
    
    const image = props.image
    const createdTime = new Date(parseInt(image.createdAt)).toJSON()
    const momentTime = moment(createdTime).fromNow()
    let thumpUpUser = null
    let thumpDownUser = null


        // check if user is authenticated to know if the user had thumped the image
        if(userId && image){
                thumpUpUser = !!image.thumpUp.userActionThumpUp.find(id => id._id === userId)
            }
            
            if(image.thumpDown.userActionThumpDown){
                thumpDownUser = !!image.thumpDown.userActionThumpDown.find(id => id._id === userId)
            }

    return(
            <div key={image.imageId} className={'card-wrapper ' + (props.isDetailsCard && 'details_card' )} onClick={() => {
                if(props.detailsRedirect){
                    props.detailsRedirect(image.imageId)
                }
                    
            }
            }
            >

                 <section className='creator'>
                    <div className='creator-image-wrapper'>
                        <img src={`/static/${image.creator.imageUrl}`} alt='creator'/> 
                    </div>
                    <div className='username'>{image.creator.username}</div>
                </section>
                    
                <section className='image-url'>
                    <img src={`/static/${image.imageUrl}`} alt="share"/>
                </section>

                <section className='data-description'>
                    <div className='thump'>
                        <div className="thump" onClick={(e) =>{
                            e.stopPropagation()
                            props.handleThumpUp(image.imageId)
                        }}>

                        <i className={"far fa-thumbs-up thumpup-icon " + (thumpUpUser ? 'thumped' : '')}></i>
                        <div className='thump-count '>
                            {image.thumpUp.thumpUpCount}
                        </div>


                        </div>
                        <div className='thump' onClick={(e)=>{
                            e.stopPropagation()
                            props.handleThumpDown(image.imageId)
                        }}>
                        <i class={"far fa-thumbs-down thumpdown-icon " + (thumpDownUser ? 'thumped' : '')}></i>
                        <div className='thump-count '>
                        {image.thumpDown.thumpDownCount}
                        </div>
                        </div>

                    </div>

                    <div className='description'>
                        {image.description}
                    </div>
                
                </section>
                <div className='time-category'>
                        <div className='moment-time'>{momentTime}</div>
                        <div className='category'>{image.category}</div>
                </div>
            </div>
        )
}

export default ImageCard