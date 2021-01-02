import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
    const [ color, setColor ] = useState("#F5DF4E")
    const [ background, setBackground ] = useState("#949398")

    const randomHexColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    }

    const randomHexBackground = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBackground(randomColor);
    }


    // document.body.style.color = color
    document.body.style.background = background

    return (
        <div className='nav-container'>
            <div className='row1'>
            <Link to="/">
                <button className="main--title">Jerome Nicco</button>
            </Link>
                <button className="--button" type="button" onClick={randomHexBackground}>Background</button>
            </div>


            <div className='row2'>

                <Link to="/about" activeClassName="nav--button__active">
                    <button className="nav--button">About</button>
                </Link>
                <Link to="/work" activeClassName="nav--button__active">
                    <button className="nav--button">Work</button>
                </Link>
                <Link to="/contact" activeClassName="nav--button__active">
                    <button className="nav--button">Contact</button>
                </Link>

            </div>



        </div>
    )
}

export default Nav
