import React from 'react'

import "./SideInfo.css"

const SideInfo = ({props}) => {
  return (
    <div className="side-info-container">
      <ul>
        {
          props.map((item, i) => <li key={i} className="left-side-items">{item}</li>
        )}
      </ul>
    </div>
  )
}

export default SideInfo
