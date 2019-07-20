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
    //  console.log(this.props.userPlayer);
    this.props.playerHandler(player);
   }

   render(){
     const {playerform, userPools} = this.props;
    //  console.log("userpools:"+userPools);
    return(
      <div className={this.state.active?"col s12 m6 pcard ":"col s12 m6 pcard selected"}>
      <div className="card cardContainer ">
        <div className="card-image hvrbox">
        <img src={playerform.pic} className="hvrbox-layer_bottom"  ></img>
          <span className="card-title">{playerform.name}</span>
          <div className="hvrbox-layer_top"> 
          <p>Player Credit :  {playerform.credit}</p>        
             <div className="hvrbox-text">{playerform.playerinfo}</div> 
          </div>          
             
          <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={this.toggleClass.bind(this)}><i className="material-icons">add</i></button>
         
          <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => this.toggleClass(playerform)}><i className="material-icons">add</i></button>
        </div>
        <div className="card-content">
        </div>
      </div>
      </div> 
  );
   }
    
}


const mapStateToProps = (state) => {
  return{
    userPlayer: state.player.user,
    userPools: state.pool.user.pools_selected
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    playerHandler: (props) => dispatch({type: 'PLAYER_CHOSEN', payload:props})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerCard);

