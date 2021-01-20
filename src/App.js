import React, { useState } from "react"
import { Switch, Route, withRouter, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import Nav from "./Components/Nav";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

import './App.scss';
import './responsive.css'
import { ContextState } from "./ContextState";

export const menuItems = [
  { path: '/', component: About, label: 'About' },
  { path: '/work', component: Work, label: 'Work' },
  { path: '/contact', component: Contact, label: 'Contact' }
]


const App = () => {
  // const [ state, dispatch ] = useReducer()
  const location = useLocation()
  const [ click, setClick ] = useState(false)

  
    if (!click) {
        document.body.style.color = '#61DAFB'
        document.body.style.background = '#202429'
    } else {
        document.body.style.color = '#202429'
        document.body.style.background = '#F7F7F7'
    }

  

  console.log(ContextState.Provider);
 
  return (
    <ContextState.Provider value={[click, setClick]}>
      <div className={!click ? 'app-dark' : 'app'}>
        <Nav />
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="my-node"
            timeout={{exit: 500, enter: 500}}
            mountOnEnter={false}
            unmountOnExit={true}
            >

            <div id="slider" className="fade">
                <Switch location={location}>
                    {menuItems.map((item, i) =>
                      <Route exact path={item.path} component={item.component} key={item.path} />
                    )}
                </Switch>
            </div>

          </CSSTransition>
        </TransitionGroup>
      </div>
    </ContextState.Provider>
  )
}


export default withRouter(App);
