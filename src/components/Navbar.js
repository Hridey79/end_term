import React from 'react'
import './Navbar.css'
import logo from '../media/logo.svg'
import { Link } from 'react-router-dom'
import Bool from './Bool'
import { useNavigate } from 'react-router-dom' 

function Navbar() {
  let history=useNavigate();
  const handleClick3=(e)=>{
    const loginCheck=Bool.splice(-1);
    
    if(loginCheck!=1){
      alert("The page is for admin use only")
    }
    else{
      history('/admin')
    }
  }
  return (
    <div className='Navbar'>
        <div className='Logo'>
          <img className='logo' src={logo} alt='logo'></img>
        </div>
        <Link to="/home" style={{ textDecoration: 'none',color:"white" }}><div className='navbtn' >Home</div></Link>
        <Link to="/about" style={{ textDecoration: 'none',color:"white" }}><div className='navbtn'>About Us</div></Link>
        <Link to="/contact" style={{ textDecoration: 'none', color:"white"}}><div className='navbtn'>Contact Us</div></Link>
        <Link to="/" style={{ textDecoration: 'none', color:"white"}}><div className='navbtn'>Log Out</div></Link>
         <div className='cus-btn' onClick={handleClick3}>Customer Details</div>          
         
        
    </div>
  )
}

export default Navbar