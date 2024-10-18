import React from 'react'
import headerStyles from "../styles/header.module.css"
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import cartImg from "../images/Cart.png"
const Header = () => {
  return (
    <div className={headerStyles.headerContainer}>
        <div className={headerStyles.logo}>
            <NavLink to="/home">Freshkart</NavLink>
        </div>
        <div className={headerStyles.nav}>
            <div className={headerStyles.navItem}>
                <NavLink>Fruits</NavLink>
            </div>
            <div className={headerStyles.navItem}>
                <NavLink>Vegetables</NavLink>
            </div>
        </div>
        <div className={headerStyles.cart}>
            <img src={cartImg} alt=""/>
            <span></span>
        </div>
        <div className={headerStyles.login}>
            Login
        </div>
    </div>
  )
}

export default Header