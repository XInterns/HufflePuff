import React from 'react';
import './SignedOutLinks.css';
import ModalLauncher from '../sign_in/SignInModalLauncher';
// import {NavLink} from 'react-router-dom';

const SignedOutLinks=()=> {
    return(
        <ul className="right">
            {/* <li><NavLink to="/signup" exact>Sign Up</NavLink> </li> */}
            <li><ModalLauncher/></li>
        </ul>
    )
}

export default SignedOutLinks;