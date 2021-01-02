import React, { useState, useEffect } from "react"
import { Switch, Route, withRouter, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useLastLocation } from 'react-router-last-location'

import Nav from "./Components/Nav";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

import './App.scss';

export const menuItems = [
  { path: '/', component: About, label: 'About' },
  { path: '/work', component: Work, label: 'Work' },
  { path: '/contact', component: Contact, label: 'Contact' }
]

const findLocationIndex = (location = {}) => menuItems.findIndex(({ path }) => location.pathname === path)

function App () {
  const location = useLocation()
  const prevLocation = useLastLocation() || {}

  const { index = findLocationIndex(location) } = location
  const { index: prevIndex = 1 } = prevLocation

  return (
    <div className="app">
      <Nav />
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="pageSlider"
          timeout={{ enter: 800, exit: 800 }}
          mountOnEnter={false}
          unmountOnExit={true}
          >
          <div className={index <= prevIndex  ? "right" : "left"}>
            <Switch location={location}>
              {menuItems.map((item) =>
                <Route path={item.path} exact component={item.component} key={item.path} />
              )}
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       prevDepth: this.getPathDepth(this.props.location)
//     };
//   }

//   getPathDepth(location){
//     let arrayPath = location.pathname.split("/");
//       arrayPath = arrayPath.filter(n => n !== "");
//       return arrayPath.length
//   }


//   render(){
//     const { location } = this.props;
//     const index = menuItems.findIndex(({ path }) => path === location.pathname)
//     console.log(index)
//     const timeout = { enter: 800, exit: 400};
//     const currentKey =location.pathname.split("/")[1] || "/";

//   return (
//     <div className="app">
//       <Nav />
//       <TransitionGroup>
//         <CSSTransition
//           key={currentKey}
//           classNames="pageSlider"
//           timeout={timeout}
//           mountOnEnter={false}
//           unmountOnExit={true}
//           >
//           <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? "right" : "left"}>
//               <Switch location={location}>
//                 {menuItems.map((item) =>
//                   <Route path={item.path} exact component={item.component} key={item.path} />
//                 )}
//               </Switch>
//           </div>
//         </CSSTransition>
//       </TransitionGroup>
//     </div>
//   );
// }}

export default withRouter(App);
