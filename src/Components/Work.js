import React, { useContext }from "react";
import WorkCard from "./WorkCard";
import bandgangsImage  from '../assets/bandgangs-image.png'
import ichinisanImage from '../assets/ichinisan-image.png'
import heroesImage from '../assets/heroes-image.png'
import renaissance from '../assets/renaissance-image.png'

import "./Work.css";
import { ContextClick } from "../Context";
// import SideInfo from "./SideInfo";

const Work = () => {
  const [ click ] = useContext(ContextClick)
  return (
      <div className="projectsCard-container page">
          <h3 className='projects-card-title'>Projects</h3>
          {/* <SideInfo /> */}
            <div className="work-body-container">
              <div className={!click ? 'work-item-container-dark' : 'work-item-container'}>
                <WorkCard 
                  title="Ichi Ni San"
                  resume="Hackaton 48h React / Node-Express app"
                  url='https://ichinisan.herokuapp.com/categorie/drinks'
                  image={ichinisanImage}
                  />
                <WorkCard 
                  title="citizen&court"
                  resume="Hackaton 24h React / PHP Back End"
                  url={'http://www.citizen-court.tech/painting'}
                  image={renaissance}
                />
                <WorkCard 
                  title="BandGangs"
                  resume="React webApp Spotify api Token authentification"
                  url={'https://boring-goodall-b83e30.netlify.app'}
                  image={bandgangsImage}
                />
                <WorkCard 
                  title="We can be Heroes"
                  resume="React webApp game guess the super hero"
                  url={'https://vigilant-mirzakhani-f3725e.netlify.app/'}
                  image={heroesImage}
                />
                {/* <WorkCard 
                  title="CovidTracker"
                  resume="React webApp Worldewide covid tracker"
                  />
                <WorkCard 
                  title="MovieDB"
                  resume="Movie data base"
                  />
                <WorkCard 
                  title="Nucleus"
                  resume="Html Css project"
                  /> */}
              </div>
          </div>
      </div>
  )
}

export default Work
