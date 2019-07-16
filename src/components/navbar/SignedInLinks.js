import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './SignedOutLinks.css';
import 'firebase/auth';
import firebase from "firebase/app";
import fbconfig from '../sign_in/config/firebaseConfig';
import {connect} from 'react-redux';

class SignedInLinks extends Component{
        
    handleSignout = () => {
    firebase.auth().signOut().then(() => {
        // console.log("before handler call="+this.props.isSignedIn);
        this.props.signoutHandler();
        }
    )}   

    render() {
    return(
        <ul className="right">
            {/* <li><NavLink to="/batsmen" exact>Select Team </NavLink> </li> */}
            {/* <li><NavLink to="/" exact>Sign Out</NavLink> </li> */}
            {/* route/redirect on signout to homepage  */}
            <li><button 
            onClick={() => this.handleSignout()}>
            Sign out!
            </button>
            </li>
            <li><NavLink to="/" exact className="btn btn-floating pink lighten-1">NN</NavLink> </li>
        </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      isSignedIn: state.auth.isLogged
    }
  }
  
  
const mapDispatchToProps = (dispatch) => {
    return{
      signoutHandler: () => dispatch({type: 'LOGOUT'})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);