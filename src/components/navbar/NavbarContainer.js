import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SIgnedOutLinks';
import { connect } from 'react-redux';
import './navbar.css'
const Navbar=(props)=> {
    const { isLogged } = props;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">
                    XPL
                </Link>
                { isLogged ? (
                <SignedInLinks/>):(
                <SignedOutLinks/>)
                }
                {/* {console.log("in Navbar",{isLogged})} */}
            </div> 
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
      isLogged: state.auth.isLogged
    }
  };

export default connect(mapStateToProps)(Navbar);