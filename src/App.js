import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";


import { TransitionGroup, CSSTransition } from "react-transition-group"

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location)
    };
  }

  getPathDepth(location){
    let arrayPath = location.pathname.split("/");
      arrayPath = arrayPath.filter(n => n !== "");
      return arrayPath.length
  }


  render(){
    const { location } = this.props;
    const timeout = { enter: 800, exit: 400};
    const currentKey =location.pathname.split("/")[1] || "/";

  return (
    <div className="app">
      <Nav />
          
      <TransitionGroup>
        <CSSTransition 
          key={currentKey}
          classNames="fade"
          timeout={350}
          mountOnEnter={false}
          unmountOnExit={true}
          > 
          {/* <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? "right" : "left"}> */}
              <Switch location={location}>
                <Route path="/" exact component={About}/>
                <Route path="/about" exact component={About} />
                <Route path="/work" exact component={Work} />
                <Route path="/contact" exact component={Contact} />
              </Switch>
          {/* </div> */}
        </CSSTransition>
      </TransitionGroup>

  
    </div>
  );
}}

export default withRouter(App);
