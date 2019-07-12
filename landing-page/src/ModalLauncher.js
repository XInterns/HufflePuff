import React, { Component } from 'react'
import injectSheet from 'react-jss';
import Modal from './sign_in/auth_modal/Modal';
import styles from './sign_in/auth_modal/ModalStyles';
import Auth from './sign_in/auth_modal/Auth';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';


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
            <button 
            className={classes.modalButton} 
            onClick={() => this.handleToggleModal()}
            >
            Open Modal
            </button>  
            {showModal && !isLogged && <Modal onCloseRequest={() => this.handleToggleModal()}/>}
            
            {console.log("props"+ isLogged)}
            
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
