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
                Currently at the WildCodeSchool Paris learning JavaScript REACT & NODE,<br></br><br></br>
                I am looking for a 6 month internship from February 2021 onwards,<br></br><br></br>
                I am autonomous at work & have a good spirit when working as a team,<br></br>
                I will be able to adapt to your projects and give the maximum of myself!<br></br><br></br>
                I love drawing, listening to music, and good coffee!<br></br>
                Always was interested in art and design, I good sense of detail
            </div>
          </div>
        </div>
  )
}

export default About
