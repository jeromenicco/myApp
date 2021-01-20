import React, { useContext } from 'react'
import { ContextState } from '../ContextState'

import "./WorkCard.css"

function WorkCard ({title, resume, url, image}) {
  const [ click ] = useContext(ContextState)
  return (
    <div className="card-container">
      <a href={url} target='_blank' rel='noreferrer'>
        <img src={image} alt={title} className="img-container"/>
      </a>
      <div className="inside-flex">
        <h4 className="card-title">{title}</h4>
        <p className={!click ? 'card-resume-dark' : 'card-resume'}>{resume}</p>
      </div>
    </div>
  )
}

export default WorkCard
