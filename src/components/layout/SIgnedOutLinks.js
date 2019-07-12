import React from 'react';
import {NavLink} from 'react-router-dom';
import './SignedOutLinks.css';
import ModalLauncher from '../../landing-page/ModalLauncher';

const SignedOutLinks=()=> {
    return(
        <ul className="right">
            {/* <li><NavLink to="/signup" exact>Sign Up</NavLink> </li> */}
            <li><button><ModalLauncher/></button> </li>
        </ul>
    )
}

export default SignedOutLinks;