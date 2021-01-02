import SlideInfo from './SlideInfo';
import React from 'react'
import Tickers from "react-ticker";


import './About.css'

const About = () => {
  return (
        <div className="profileTitle--container page">
          <div className="title--ticker--wrap">
            <h3 className='profileCard--title'>Profile</h3>
            <SlideInfo />
            {/* <Ticker className="profile--ticker" speed={3} mode="chain">
            {() => (
                <p className="text--ticker" style={{height: "3em"}}>JS++REACT++NODE++</p>
            )}
            </Ticker> */}
          </div>
          <div className="about--body--container">
            <div className="about--item--container">
                Hi I'm Jerome,<br></br><br></br>
                Currently at the <b>WildCodeSchool</b> Paris learning<br></br>
                <b>JavaScript REACT & NODE</b>,<br></br><br></br>
                I am looking for a <b>6 months internship from February 2021 onwards</b>,<br></br><br></br>
                I am <b>autonomous</b> at work & have a <b>good spirit when working as a team</b>,<br></br>
                I will be able to <b>adapt</b> to your projects and <b>give the maximum of myself</b>!<br></br><br></br>
                I love drawing, listening to music, and good coffee!<br></br>
                Always was interested in art and design, I good sense of detail
            </div>
          </div>
        </div>
  )
}

export default About
