import React, { Component } from 'react'
import injectSheet from 'react-jss';
import Modal from './auth_modal/Modal';
import styles from './auth_modal/ModalStyles';
import { connect } from 'react-redux';
import {NavLink} from "react-router-dom";


class ModalLauncher extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
        };
      }
      
      handleToggleModal() {
        this.setState({ showModal: !this.state.showModal });
      }

    render() {
        const { classes, isLogged } = this.props;
        const { showModal } = this.state;
      
        return (
            <div>
            <NavLink to="/"
            className={classes.modalButton} 
            onClick={() => this.handleToggleModal()}
            >
            Sign In
            </NavLink>  
            {showModal && !isLogged && <Modal onCloseRequest={() => this.handleToggleModal()}/>}          
            </div>  

        );
    }
}

const mapStateToProps = (state) => {
  //  console.log("state"+state.auth);
  return{
    isLogged: state.auth.isLogged
  }
};

export default injectSheet(styles)(connect(mapStateToProps)(ModalLauncher));
