import React from 'react';
import {NavLink} from 'react-router-dom';
import './SignedOutLinks.css';

const SignedOutLinks=()=> {
    return(
        <ul className="right">
            <li><NavLink to="/signup" exact>Sign Up</NavLink> </li>
            <li><NavLink to="/signin"exact>Log In</NavLink> </li>
        </ul>
    )
}

export default SignedOutLinks;