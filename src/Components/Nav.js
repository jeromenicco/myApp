import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
    const [ color, setColor ] = useState("#F5DF4E")
    const [ background, setBackground ] = useState("#949398")

    const randomHexColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
        let text = document.querySelectorAll('p')
        document.body.style.color = text
    }

    const randomHexBackground = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBackground(randomColor);
        document.body.style.background = background
    }

    

    // document.body.style.color = color
    
    

    return (
        <div className='nav-container'>
            <div className='row1'>
            <Link to="/">
                <button className="main--title">Jerome Nicco</button>
            </Link>
                <button className="--button" type="button" onClick={randomHexColor}>Background</button>
            </div>


            <div className='row2'>

                <Link to="/about" activeClassName="nav--links__active">
                    <p className="nav--links">About</p>
                </Link>
                <Link to="/work" activeClassName="nav--links__active">
                    <p className="nav--links">Work</p>
                </Link>
                <Link to="/contact" activeClassName="nav--links__active">
                    <p className="nav--links">Contact</p>
                </Link>

            </div>



        </div>
    )
}

export default Nav
