import React from 'react'
import './admin.css';
import {NavLink} from 'react-router-dom';

function SideBar() {
    return (
        <div className="sidebarContainer">
            <div><NavLink to="updateScore" className="sideLink"> Update Player Score </NavLink> </div>
            <div><NavLink className="sideLink"> Manage Contests </NavLink> </div>
            <div><NavLink className="sideLink"> Manage Pools </NavLink> </div>
        </div>
    )
}

export default SideBar
