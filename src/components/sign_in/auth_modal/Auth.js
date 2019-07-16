import React, {Component} from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"; 
import {connect} from 'react-redux';

import "./auth.css"

class Auth extends Component{

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],

    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  componentDidMount = () => {
    // console.log(firebase.auth().currentUser);
    firebase.auth().onAuthStateChanged( (user) => {
      if(user){
        this.props.signinHandler();
      }
       
      // console.log(this.state.isSignedIn);
    })
  }

  render() {
    return (
      <div className="Auth">
        {this.props.isSignedIn ? (
          <div>Signed In!!
            <button onClick={firebase.auth().signOut}>Sign out!</button>
            {/* TODO: send img as a prop*/}
            {/* <img alt="profile-pic" src={firebase.auth().currentUser.photoURL}/> */}
          </div>
        ):(
          <StyledFirebaseAuth
           style = {{width: '50px'}}
           uiConfig={this.uiConfig}
           firebaseAuth={firebase.auth()}
          />
        )}
      </div>
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
    signinHandler: () => dispatch({type: 'AUTH_SUCCESS'})
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(Auth);