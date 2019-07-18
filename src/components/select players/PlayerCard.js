import React from 'react';
import './PlayerCard.css'

class PlayerCard extends React.Component {
   constructor(props) {
     super(props);
     this.state={
       active:true
     };

   }

   toggleClass(){
     const currentState = this.state.active;
     this.setState({active:!currentState});
   }
   render(){
     const {playerform} = this.props;
    return(
      <div className={this.state.active?"col s12 m6 pcard ":"col s12 m6 pcard selected"}>
      <div className="card cardContainer ">
        <div className="card-image hvrbox">
        <img src={playerform.pic} className="hvrbox-layer_bottom"  ></img>
          <span className="card-title">{playerform.name}</span>
          <div className="hvrbox-layer_top">         
             <div className="hvrbox-text">{playerform.playerinfo}</div> 
          </div>          
             
             <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={this.toggleClass.bind(this)}><i className="material-icons">add</i></button>
          <p> Player credit: 11 pts</p>
        </div>
        <div className="card-content">
        </div>
      </div>
      </div> 
  );
   }
    
}

export default PlayerCard;

