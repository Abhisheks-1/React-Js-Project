import React, { useState } from "react";
import "./navbar.css";
import { FaCartPlus, FaUserAlt } from "react-icons/fa";
import { FiHeart, FiSearch } from "react-icons/fi";
import { BsCart3,BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill, } from "react-icons/bs";

import { BiUser, BiUserCircle, BiMenu } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src="/images/1.png" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <BiMenu className="menu" />
              <NavLink to="/">categories</NavLink>
            </li>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <div className="search">
              <input type="search" placeholder="Type here"></input>
            </div>
          </ul>
        </div>

       

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href=""
                target="_A2Z Cart"
              >
                <FiHeart className="heart" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_A2Z"
              >
                <BsCart3 className="cart" />
              </a>
            </li>
            <li>
              
                <Link to="/LoginPage"><FaUserAlt className="user" /></Link>
                
                          
            </li>
          </ul>
          
          <div>
            
          </div>
         

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
     
  )
        }
        

export default Navbar;
