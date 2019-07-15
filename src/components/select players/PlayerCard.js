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
      <div className="card cardContainer">
        <div className="card-image">
        <img src={playerform.pic}></img>
          <span className="card-title">{playerform.name}</span>
          <button className="btn-floating halfway-fab waves-effect waves-light red" onClick={this.toggleClass.bind(this)}><i className="material-icons">add</i></button>
        </div>
        <div className="card-content">
          <p> Player credit: 11 pts</p>
        </div>
      </div>
      </div> 
  );
   }
    
}

export default PlayerCard;

