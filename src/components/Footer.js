import React from 'react'
import '../styles/footer.css'

const Footer = () =>{
    return(
        <div className='footer-wrapper'>
            <section className='website-wrapper'>
                <div className='name-footer'>gidiShare</div>
                <div className='social-media'>
                <a href='https://github.com/AbrahamMayowa'><i class="fab fa-github media-icon"></i></a>
                <a href='https://twitter.com/mayowa_life'><i class="fab fa-twitter media-icon"></i></a>
                </div>
            </section>
            <section className='copywrite'>
            &copy; 2020 GidiShare. All Right Reserved
                
            </section>

        </div>
    )
}

export default Footer