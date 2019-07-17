import React from 'react';
import {connect} from 'react-redux';
import './PlayerCard.css'

class PlayerCard extends React.Component {
   constructor(props) {
     super(props);
     this.state={
       active:true
     };

   }

   toggleClass(player){
     const currentState = this.state.active;
     this.setState({active:!currentState});
     console.log(this.props);
    this.props.playerHandler(player);
   }

   render(){
     const {playerform} = this.props;
    return(
      <div className={this.state.active?"col s12 m6 pcard ":"col s12 m6 pcard selected"}>
      <div className="card cardContainer">
        <div className="card-image">
        <img src={playerform.pic}></img>
          <span className="card-title">{playerform.name}</span>
          <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => this.toggleClass(this.props)}><i className="material-icons">add</i></button>
        </div>
        <div className="card-content">
          <p> Player credit: 11 pts</p>
        </div>
      </div>
      </div> 
  );
   }
    
}


const mapStateToProps = (state) => {
  return{
    userPlayer: state.player.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    playerHandler: (props) => dispatch({type: 'PLAYER_CHOSEN', payload:props})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerCard);

