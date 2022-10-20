import React from 'react'
import './Home.css'
import image from '../media/download.jpg'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='Home'>
        <div className='info'>
            <p className='info-head'>
                Create the building you want here
            </p>
            <p>
                We procide the best architectural design,construction and building maintenance services for you
            </p>

            <div className='btn-drawer'>
                <Link to='/about' style={{ textDecoration: 'none' }}><div className='About_Us-btn'>About Us</div></Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}><div className='Contact_Us-btn'>Contact Us</div></Link>
            </div>

        </div>
        <div className='image-drawer'>
            <img src={image} alt='img'></img>
        </div>
    </div>
  )
}

export default Home