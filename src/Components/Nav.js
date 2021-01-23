import React, { useContext } from "react";
import { NavLink as Link } from "react-router-dom";
import { menuItems } from '../App'
import { ContextClick } from "../Context";

import "./Nav.css";

        

const Nav = ({ navbarClasses, scrolled }) => {
    const [ click, setClick ] = useContext(ContextClick)

    return (
        <div className='nav-container'>
            <div className='row1'>
                <h1 className="main-title">Jerome Nicco</h1>
                <button className={!click ? "button-dark" : "button"} onClick={() => setClick(!click)}>{!click ? 'Light' : 'Dark'}</button>
            </div>
            <section className={navbarClasses.join(" ")}>
                <div className={!click ? 'row2-dark' : 'row2'}>
                    {menuItems.map((item, index) =>
                        <Link exact to={{pathname: item.path, index }} key={item.path} activeClassName="nav-links__active">
                            <p className={!click ? 'nav-links-dark' : 'nav-links'}>{item.label}</p>
                        </Link>
                    )}
                </div>
            </section>
            <div className={scrolled ? 'nav-div-scrolled' : 'nav-div'} />
        </div>
    )
}

export default Nav
