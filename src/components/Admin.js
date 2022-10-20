import React from 'react'
import Card2 from './Card2'
import './Admin.css'
function Admin() {
  return (
    <div className='admin'>
        <div className='parent'>
        <div className='heading_1'><h1>Customer Reviews</h1></div>
        <div className='lists'>
            <Card2/>
        </div>
        </div>
    </div>
  )
}

export default Admin