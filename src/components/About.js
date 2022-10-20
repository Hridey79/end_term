import React from 'react'
import './About.css'
import ActionAreaCard from './Card.js'

import img1 from '../media/project1.png'
import img2 from '../media/project2.png'
import img3 from '../media/project3.png'
function About() {
  return (
    <div className='About_Us'>
        <p className='aboutUs-header'>About Us</p>
        <div className='About_Us_inner'>
          <div className='left-div'>
          <div className='area1'>
              <ActionAreaCard heading='Wide Experience' content="With extensive experience of more than 10+ years,
              with best globally recorgonized engineers"></ActionAreaCard>
              
              <ActionAreaCard heading='Guranteed Quality' content="Fullfill our promise to deliver innovative dynamic solutions to customers to fit the need"></ActionAreaCard>
          </div>
          <div className='area1'>
              <ActionAreaCard heading='Professional Workers' content='The best and expertly trained team members who take the extra step and go extra mile'></ActionAreaCard>
              <ActionAreaCard heading='Stats' content="10+ Years of experience, 300+ Projects , World renowed experts, Award Winiing teams"></ActionAreaCard>
          </div>
          </div>
          <div className='right-div'>
          <h3 className='subheader23'>Projects</h3>
          <img alt='img' src={img1} className='img23'></img>
          <img alt='img' src={img2} className='img23'></img>
          <img alt='img' src={img3} className='img23'></img>
        </div>

        </div>
    </div>
  )
}

export default About