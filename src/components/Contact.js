import {React,useState }from 'react'
import "./Contact.css"
import Data from './Data.jsx'


function Contact() {
    const [name,setname]=useState('');
    const [num,setnum]=useState('');
    const [budget,setbudget]=useState('');
    const [details,setdetails]=useState(''); 
    const handleClick=(e)=>{
        e.preventDefault();
        let a=name,b=num,c=budget,d=details;
        Data.push({a,b,c,d});
        // console.log(Data)
        // frm.reset()
        // console.log(Data)
        alert("Your response has been recorded")
        setname("")
        setbudget("")
        setdetails("")
        setnum("")
    }
  return (
    <div className='contact'>
        <p className='aboutUs-header'>
            Contact Us
        </p>
        <div className='form' >
            <div className='name'>
                <label className='input_label' >Name</label>
                <input className='input_input' type='text' placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)} size={60}></input>
            </div>
            <div className='name'>
                <label className='input_label'>Contact No.</label>
                <input className='input_input' type='text' placeholder='Contact No.' value={num} onChange={(e)=>setnum(e.target.value)} size={60}></input>
            </div>
            <div className='name'>
                <label className='input_label'>Budget</label>
                <input className='input_input' value={budget} type='text' placeholder='Budget for the project' onChange={(e)=>setbudget(e.target.value)} size={60}></input>
            </div>
            <div className='textarea'>
                <label className='input_label'>
                    Project Details
                </label>
                <textarea  value={details} cols={55} rows={10} className='textarea_in' placeholder='Please provide the details for the Project' onChange={(e)=>setdetails(e.target.value)}>

                </textarea>
            </div>
            <div className='button'>
                <button type='reset' onClick={handleClick}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contact