import React, { useContext, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { menuItems } from '../App'
import { ContextState } from "../ContextState";

import "./Nav.css";

const Nav = () => {
    const [ click, setClick ] = useContext(ContextState)

    return (
        <div className='nav-container'>
            <div className='row1'>
                <h1 className="main-title">Jerome Nicco</h1>
                <button className={!click ? "button-dark" : "button"} onClick={() => setClick(!click)}>{!click ? 'Light' : 'Dark'}</button>
            </div>
            <div className={!click ? 'row2-dark' : 'row2'} >
                {menuItems.map((item, index) =>
                    <Link exact to={{pathname: item.path, index }} key={item.path} activeClassName="nav-links__active">
                        <p className={!click ? 'nav-links-dark' : 'nav-links'}>{item.label}</p>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Nav
