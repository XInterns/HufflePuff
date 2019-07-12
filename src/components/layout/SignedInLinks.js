import React from 'react';
import {NavLink} from 'react-router-dom';
import './SignedOutLinks.css';

const SignedInLinks=()=> {
    return(
        <ul className="right">
            <li><NavLink to="/batsmen" exact>Select Team </NavLink> </li>
            <li><NavLink to="/" exact>Log Out</NavLink> </li>
            <li><NavLink to="/" exact className="btn btn-floating pink lighten-1">NN</NavLink> </li>
        </ul>
    )
}

export default SignedInLinks;