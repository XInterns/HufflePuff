import React from 'react';
import './SignedOutLinks.css';
import ModalLauncher from '../sign_in/SignInModalLauncher';
import {NavLink} from 'react-router-dom';

const SignedOutLinks=()=> {
    return(
        <ul className="right">
            <NavLink to = "/signin"> Sign  In </NavLink>
            {/* <NavLink to='/' ><li><ModalLauncher/></li> </NavLink> */}
        </ul>
    )
}

export default SignedOutLinks;