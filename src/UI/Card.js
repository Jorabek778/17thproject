import React from 'react'
import "./Card.css"

const Card = (props) => {
    const Class = 'card ' + props.className
  return (
    <div className={Class}>{props.children}</div>
  )
}

export default Card