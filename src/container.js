import React from 'react'
import "./container.css";

const container = ({children}) => {
  return (
    <div className='content'>{children}</div>
  )
}

export default container