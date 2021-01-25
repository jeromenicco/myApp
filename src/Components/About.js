import SideInfo from './SideInfo';
import React, { useContext } from 'react'
import { ContextClick } from '../Context'
// import Tickers from "react-ticker";
// import Clock from '../Clock'

import './About.css'

const About = () => {
  
  const [ click ] = useContext(ContextClick)

  return (
        <div className="profile-title-container page">
          <div className="title-ticker-wrap">
            {/* <Clock /> */}
            <p className={!click ? 'profile-card-title-dark' : 'profile-card-title'}>Profile</p>
            <SideInfo props={ ['JavaScript', 'React', 'Node', 'MySql', 'GitHub'] }/>
            <SideInfo props={ ['']} />
            {/* <Ticker className="profile-ticker" speed={3} mode="chain">
            {() => (
                <p className="text-ticker" style={{height: "3em"}}>JS++REACT++NODE++</p>
            )}
            </Ticker> */}
          </div>
          <div className="about-body-container">
            <div className={!click ? 'about-item-container-dark' : 'about-item-container'}>
                <p>Hi I'm Jerome,
                  <br></br><br></br>
                  Currently at the <em>WildCodeSchool</em> Paris learning<br></br>
                  <em>JavaScript REACT & NODE</em>,
                  <br></br><br></br>
                  I am looking for a <em>6 months internship from February 2021 onwards</em>,
                  <br></br><br></br>
                  I am <em>autonomous</em> at work & have a <em>good spirit when working as a team</em>,
                  <br></br>
                  I will be able to <em>adapt</em> to your projects and <em>give the maximum of myself</em>!
                  <br></br><br></br>
                  I love <em>drawing</em>, listening to <em>music</em>, and good <em>coffee!</em>
                  <br></br>
                  Always was interested in <em>art</em> and <em>design</em>, I have good sense of <em>detail</em>
                  </p>
            </div>
          </div>
        </div>
  )
}

export default About
