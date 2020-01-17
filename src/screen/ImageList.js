import React from 'react'
import ImageCard from '../components/ImageCard'
import Header from '../components/HeaderSection'


export default class Images extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            images: [],
    
            isLoading: false,
            error: '',
            actionFeedback: ''
        }
    }

    render(){
        return (
        <React.Fragment>
            <section>
                <Header image={}
            </section>
            <section>
                {this.state.images.map(image => {
                    <ImageCard image={image} />
                })}
            </section>
        </React.Fragment>

        )
    }

}
