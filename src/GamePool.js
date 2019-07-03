import React, { Component } from 'react';
import './GamePool.css';
import data from './data/data'
import GameCard from './GameCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
// import ContainerChoosePool from './Container_ChoosePool';
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


class GamePool extends Component {

  constructor(props){
    super(props);
    this.state = {
  
      game: data.games[0]
    }
  }

  
  nextgame = () => {
    const newIndex = this.state.game.index+1;
    this.setState({
      game: data.games[newIndex]
    })
  }

  prevgame = () => {
    const newIndex = this.state.game.index-1;
    this.setState({
      game: data.games[newIndex]
    })
  }

  render() {
    const {game} = this.state;
    return (
     

     
      <div className='game-container'>

  {/* <Switch>
  <Route path="/CricketPools" component={ContainerChoosePool}/>
  </Switch> */}
   
      <div className="page">
          <section className="chooseGame">
            STEP 1 : Choose Game
          </section>
      <div className="games">
      <button 
        className="prev"
        onClick={() => this.prevgame()} 
        disabled={game.index === 0}
      ><FontAwesomeIcon icon={faChevronLeft} /></button>
        
          <GameCard game={game} />
       
      <button 
        className="next"
        onClick={() => this.nextgame()} 
        disabled={game.index === data.games.length-1}
      ><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
      </div>
    </div>

    );
  }
}

export default GamePool;
