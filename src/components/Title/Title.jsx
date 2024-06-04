import React from 'react'
import './Title.css'
const Title = ({subtitle, title, subtitleAnother}) => {
  return (
    <div className='title container'>
        <p className='subtitle'>{subtitle}</p>
        <h2>{title}</h2>
        <p className='another-subtitle'>{subtitleAnother}</p>
    </div>
  )
}

export default Title