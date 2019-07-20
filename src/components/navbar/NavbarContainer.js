import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SIgnedOutLinks';
import { connect } from 'react-redux';
import ModalLauncher from '../sign_in/SignInModalLauncher';
import {NavLink} from 'react-router-dom';

const Navbar=(props)=> {
    const { isLogged, userPlayers } = props;
    // console.log(userPlayers.length);
    return(
        <nav className="nav-wrapper grey darken-3">
            
               <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li><Link to='/' className="brand-logo center">
                    XPL
                </Link></li> 
                { isLogged
                ? (
                <div>
                <li className="right"> <SignedInLinks/> </li>
                {(userPlayers.length == 11) ? (
                  <li><NavLink to = "/bid" className="right"> {console.log(userPlayers.length)}BID </NavLink></li>)
                  : (
                  <div/>
                  )
                }
               </div>)
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
      isLogged: state.auth.isLogged,
      userPlayers: state.player.user.players_selected,
    }
  };

export default connect(mapStateToProps)(Navbar);