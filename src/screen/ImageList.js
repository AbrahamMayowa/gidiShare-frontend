import React from 'react'
import ImageCard from '../components/ImageCard'
import Header from '../components/HeaderSection'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import Loading from '../components/Loading'
import NoItem from '../components/NoItem'
import imageListThunk from '../redux/action/imageListActionThunk'
import thumpThunk from '../redux/action/thumpThunk'
import '../styles/imageList.css'
import Footer from '../components/Footer'



class Images extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.dispatch(imageListThunk())   
    }

   // componentDidUpdate(prevProps){
     //   if(prevProps.images.error === 'You are not authorized'){
       //     prevProps.handleLogin()
        //}

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



    handleThumpDown=(imageId)=>{
        const token = this.props.auth.token
        if(!token){
            this.props.handleLogin()
        }else{
            this.props.dispatch(thumpThunk(imageId, token, false))
        }

    }

    handleDetailsRedirect =(imageId)=>{
        this.props.history.push(`/details/${imageId}`)

    }

    render(){
        const {images, loading} = this.props.images
        const {imageUrl} = this.props.auth

        let noImageOrImageCard = <NoItem />

        if(images.length > 0){
            noImageOrImageCard = images.map(image => <ImageCard  image={image} 
                detailsRedirect={this.handleDetailsRedirect} handleLogin={this.props.handleLogin} 
                handleThumpUp={this.handleThumpUp} handleThumpDown={this.handleThumpDown}/>)
        }

        return (
        <div>
            <section className='card-session'>
                <Header userImageUrl={imageUrl} handleUpload={this.props.handleUploadForm} handleLogin={this.props.handleLogin}/>
                {loading ? <div className='loading'><Loading /></div> : noImageOrImageCard}
            </section>

            <Footer />
            </div>

        )
    }

}

const mapState = (state) => {
    return {
        auth: state.auth,
        images: state.images

    }
}

export default withRouter(connect(mapState)(Images))