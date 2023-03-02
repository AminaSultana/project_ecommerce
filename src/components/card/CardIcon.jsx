import React from 'react'
import { Link } from 'react-router-dom'
const CardIcon = ({ title, text, tips, to, Img }) => {
  return (
    <Link to={to} className='text-decoration-none'>
      <div className='card text-center' style={{ margin: '1rem' }}>
        <div className='card-body'>
          {/* {children} */}
          <Img width='80' height='80' />
          <h6 className='card-title text-capitalize'>{title}</h6>
          <div className='card-text text-success'>{text}</div>
          <small className='text-muted'>{tips}</small>
        </div>
      </div>
    </Link>
  )
}

export default CardIcon
