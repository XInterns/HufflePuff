import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SignedOutLinks.css';
import './SignedInLinks.css';
import 'firebase/auth';
import firebase from "firebase/app";
import fbconfig from '../sign_in/config/firebaseConfig';
import { connect } from 'react-redux';

class SignedInLinks extends Component {

  handleSignout = () => {
    firebase.auth().signOut().then(() => {
      this.props.signoutHandler();
    }
    )
  }

  render() {
    return (
      <ul className="right">
        <li><NavLink to="/quizStart" exact>Play Quiz</NavLink> </li>
        <li>
          <NavLink to="" activeStyle={{ color: 'orange' }} onClick={() => this.handleSignout()}> Sign Out</NavLink>
        </li>
        <li>
          <li> Your Points: {this.props.totalScore}</li>
          <li>
            <NavLink to="/" exact className="uprofile">
              <img alt="profile-pic" src={firebase.auth().currentUser.photoURL} /></NavLink>
          </li>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isLogged,
    totalScore: state.quizEnd.totalScore
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    signoutHandler: () => dispatch({ type: 'LOGOUT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);