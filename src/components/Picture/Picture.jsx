import React from 'react'
import './Picture.css'
import main_image from '../assets/main-image.png'

const Picture = () => {
  return (
    <div className='picture '>
        <img src={main_image} alt="Calendar" className='main-image' />
    </div>
  )
}

export default Picture
