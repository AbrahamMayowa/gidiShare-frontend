import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ImageCard from '../components/ImageCard'
import singleImageThunk from '../redux/action/singleImageThunk'
import singleImageFetch from '../redux/action/singleImageThunk'
import Loading from '../components/Loading'
import Header from '../components/HeaderSection'
import Error from '../components/Error'
import thumpThunk from '../redux/action/thumpThunk'
import '../styles/detailsScreen.css'
import Footer from '../components/Footer'

class DetailsScreen extends React.Component{

    componentDidMount(){
        const matchId = this.props.match.params.id
        this.props.dispatch(singleImageFetch(matchId))
    }

    componentDidUpdate(prevProps){
        if(this.props.auth.success !== prevProps.auth.success){
            this.props.handleLogin()
        }
    }


    handleThumpUp = (imageId) =>{
        const token = this.props.auth.token
        if(!token){
            this.props.handleLogin()
        }else{
            this.props.dispatch(thumpThunk(imageId, token))
        }
    }


    handleThumpDown = (imageId)=>{
        const token = this.props.auth.token
        if(!token){
            this.props.handleLogin()
        }else{
            this.props.dispatch(thumpThunk(imageId, token, false))
        }

    }


    render(){
        const singleImage = this.props.singleImage
        const {loading, error} = {...singleImage}
        const {imageUrl} = {...this.props.auth}
    
    if(loading){
        return <Loading />
    }
    else if(error){
        return <Error error={error} />
    }else{
    return (
        <div className='details'>
            <Header userImageUrl={imageUrl} handleLogin={this.props.handleLogin} />
                <ImageCard image={singleImage} handleLogin={this.props.handleLogin} 
                    handleThumpUp={this.handleThumpUp} handleThumpDown={this.handleThumpDown} isDetailsCard={true}/>
            < Footer />
        </div>
    )
    }

}
}

const mapPropToState = state =>{
    return {
        singleImage: state.singleImage,
        auth: state.auth
    }
}

export default withRouter(connect(mapPropToState)(DetailsScreen))