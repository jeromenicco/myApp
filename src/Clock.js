import React from 'react'

import './Clock.css'


const Clock = () => {

  const setDate = () => {
    const secondHand = document.querySelector('.second-hand')
    const minHand = document.querySelector('.min-hand')
    const hourHand = document.querySelector('.hour-hand')


    const now = new Date()
    const second = now.getSeconds()
    const secondDegrees = ((second / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondDegrees}deg)`

    const min = now.getMinutes()
    const minDegrees = ((min / 60) * 360) + 90
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
  }

  setInterval(setDate, 1000)

  return (
    <div className='clock'>
      <div className='clock-face'>
        <div className='hand hour-hand'></div>
        <div className='hand min-hand'></div>
        <div className='hand second-hand'></div>
      </div>
    </div>
  )
}

export default Clock
