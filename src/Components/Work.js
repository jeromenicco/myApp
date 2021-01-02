import React from "react";
import WorkCard from "./WorkCard";

import "./Work.css";

const Work = () => {
  return (
      <div className="projectsCard--container page">
          <h3 className='projectsCard--title'>Projects</h3>
            <div className="work--body--container">
              <div className="work--item--container">
                <WorkCard 
                  title="RenaissanceContenders"
                  resume="Hackaton Wild Code School"
                  />
                <WorkCard 
                  title="BandGangs"
                  resume="React webApp Spotify api"
                  />
                <WorkCard 
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
                  />
              </div>
          </div>
      </div>
  )
}

export default Work
