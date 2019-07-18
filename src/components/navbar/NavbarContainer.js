import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SIgnedOutLinks';
import { connect } from 'react-redux';
import ModalLauncher from '../sign_in/SignInModalLauncher';
import {NavLink} from 'react-router-dom';
const Navbar=(props)=> {
    const { isLogged } = props;
    return(
        <nav className="nav-wrapper grey darken-3">
            
                <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li><Link to='/' className="brand-logo center">
                    XPL
                </Link></li> 
                { isLogged 
                ? (
               <li className="right"> <SignedInLinks/> </li>)
                : (
               <div> 
                 <li className="right"> <ModalLauncher/></li>
                 <li> <NavLink to = "/admin"> Admin </NavLink></li>
               </div>)
                }
                </ul>
                {/* {console.log("in Navbar",{isLogged})} */}
            
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
      isLogged: state.auth.isLogged
    }
  };

export default connect(mapStateToProps)(Navbar);