import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faGripVertical , faCartShopping , faUserTie , faRightFromBracket, faMoneyBill , faBowlFood, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../images/logo.jpeg'

function Sidebar(){
  const [isSidebarOpen , setisSidebarOpen] = useState(false)
  return (
    <>
    <aside>
            <div className="top">
                <div className="logo">
                    <img src={Logo} alt=""/>
                    <h2>DINE<span className="danger">MATE</span></h2>
                </div>
                <div className="close" id="close-btn">
                    </div>
            </div>
            <div className="sidebar">
                <NavLink className={({isActive})=>`${isActive ? "active" : ""}`}  to="/user">
                <FontAwesomeIcon icon={faGripVertical}  className='text-[20px]'/>
                    <h3>Users</h3>
                </NavLink>
                <NavLink  className={({isActive})=>`${isActive ? "active" : ""}`} to="/Orders">
                <FontAwesomeIcon icon={faRankingStar} className='text-[20px]' />
                    <h3>Reviews Managment</h3>
                </NavLink>
                <NavLink className={({isActive})=>`${isActive ? "active" : ""}`}  to="/user-profile">
                <FontAwesomeIcon icon={faUserTie} className='text-[20px]' />
                    <h3>My Profile</h3>
                </NavLink>
                <NavLink className={({isActive})=>`${isActive ? "active" : ""}`}  to="/payment">
                <FontAwesomeIcon icon={faMoneyBill} className='text-[20px]' />
                <h3>Payment Managment</h3>
                </NavLink>
                <NavLink className={({isActive})=>`${isActive ? "active" : ""}`}  to="/resturent-managment">
                <FontAwesomeIcon icon={faBowlFood} />
                <h3>Resturent Managment</h3>
                </NavLink>
                <NavLink className={({isActive})=>`${isActive ? "active" : ""}`}  to="#">
                <FontAwesomeIcon icon={faRightFromBracket} className='text-[20px]' />
                    <h3>Logout</h3>
                </NavLink>
            </div>
        </aside>
  </>
  )
}

export default Sidebar