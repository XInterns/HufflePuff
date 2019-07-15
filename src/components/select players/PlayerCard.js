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

    return(
      <div class={this.state.active?"col s12 m6 pcard ":"col s12 m6 pcard selected"}>
      <div class="card cardContainer">
        <div class="card-image">
        <img src="https://www.jagranjosh.com/imported/images/E/Articles/virat_kohli.jpg"></img>
          <span class="card-title">Virat Kohli</span>
          <button class="btn-floating halfway-fab waves-effect waves-light red" onClick={this.toggleClass.bind(this)}><i class="material-icons">add</i></button>
        </div>
        <div class="card-content">
          <p> Player credit: 11 pts</p>
        </div>
      </div>
      </div> 
  );
   }
    
}

export default PlayerCard;