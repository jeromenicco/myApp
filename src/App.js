import React, { useState } from "react"
import { Switch, Route, withRouter, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import Nav from "./Components/Nav";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

import './App.scss';
import './responsive.css'
import { ContextClick } from "./Context";


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

  const [ scrolled, setScrolled ] = useState(false)

  const handleScroll=() => {
      const offset = window.scrollY


      console.log(offset);


      if (offset >= 45) {
        setScrolled(true)
      }
      else {
        setScrolled(false)
      }
    } 
      window.addEventListener('scroll',handleScroll)
      let navbarClasses = ['navbar'];
          if (scrolled && !click) {
              navbarClasses.push('scrolled-dark');
          } else if (scrolled && click) {
              navbarClasses.push('scrolled');
          }



  

  // console.log(ContextClick.Provider);
 
  return (
    <ContextClick.Provider value={[click, setClick]}>
      <div className={!click ? 'app-dark' : 'app'}>
        
         <Nav navbarClasses={navbarClasses} scrolled={scrolled} handleScroll={handleScroll} />
      
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="my-node"
            timeout={{exit: 500, enter: 500}}
            mountOnEnter={false}
            unmountOnExit={true}
            >

            <div className="fade">
                <Switch location={location}>
        
                    {menuItems.map((item, i) =>
                      <Route exact path={item.path} component={item.component} key={item.path}/>
                    )}
                </Switch>
            </div>

          </CSSTransition>
        </TransitionGroup>
      </div>
    </ContextClick.Provider>
  )
}


export default withRouter(App);
