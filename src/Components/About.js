import SideInfo from './SideInfo';
import React, { useContext } from 'react'
import { ContextClick } from '../Context'
// import Tickers from "react-ticker";

import './About.css'

const About = () => {
  
  const [ click ] = useContext(ContextClick)

  return (
        <div className="profile-title-container page">
          <div className="title-ticker-wrap">
            <h3 className='profile-card-title'>Profile</h3>
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
                Hi I'm Jerome,
                <br></br><br></br>
                Currently at the <b>WildCodeSchool</b> Paris learning<br></br>
                <b>JavaScript REACT & NODE</b>,
                <br></br><br></br>
                I am looking for a <b>6 months internship from February 2021 onwards</b>,
                <br></br><br></br>
                I am <b>autonomous</b> at work & have a <b>good spirit when working as a team</b>,
                <br></br>
                I will be able to <b>adapt</b> to your projects and <b>give the maximum of myself</b>!
                <br></br><br></br>
                I love <b>drawing</b>, listening to <b>music</b>, and good <b>coffee!</b>
                <br></br>
                Always was interested in <b>art</b> and <b>design</b>, I have good sense of detail
            </div>
          </div>
        </div>
  )
}

export default About
