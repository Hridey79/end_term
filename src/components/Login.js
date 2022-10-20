import {useState,React} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Bool from './Bool'

function Login() {
    const [uname,setuname]=useState('');
    const [pass,setpass]=useState('');
    const handleClick2=(e)=>{
        // e.preventDefault();
        // console.log(uname)
        let a=uname;
        let b=pass;
        if(a=='admin' && b=='admin'){
            Bool.push(1);
        }
        else{
            Bool.push(0);
        }
        // console.log(Bool.splice(-1)[0])
    }
  return (
    <div className='login'>
        <p className='aboutUs-header'>
            Log In
        </p>
        <div className='login-main'>
            <div className='login-text'>
                <p className='login-compname'>Constructo Constructions</p>
                <div>
                    <p className='login-subheading'>Best in class Constructions</p>
                    <p>Hormonious teams of World class experts</p>
                </div>
                <div>
                    <p className='login-subheading'>Trusted name from 10years</p>
                    <p>Experienced teams, been in field from last 10 years</p>
                </div>
            </div>  
            <div className='login-form'>
                <div className='name'>
                    <label className='input_label' >E-Mail/UserName</label>
                    <input className='input_input' type='text' onChange={(e)=>setuname(e.target.value)} placeholder='E-Mail/UserName'size={60}></input>
                </div>
                <div className='name'>
                    <label className='input_label' >Password</label>
                    <input className='input_input' type='password' onChange={(e)=>setpass(e.target.value)} placeholder='Password'size={60}></input>
                </div>
                <div className='login-button'>
                    <Link to='/home'><button type='submit' onClick={handleClick2}>Log In</button></Link>
                    
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Login