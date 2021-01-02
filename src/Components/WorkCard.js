import React from 'react'

import "./WorkCard.css"

function WorkCard ({title, resume}) {
  return (
    <div className="card--container">
      <div className="img--container" />
      <div className="inside--flex">
        <h4 className="card--title">{title}</h4>
        <p className="card--resume">{resume}</p>
      </div>
    </div>
  )
}

export default WorkCard
