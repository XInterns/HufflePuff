import React, { Component } from 'react';
import './contests.css';
import data from '../../data/data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ContestCard from './contestCard';


class ContestCardContainer extends Component {

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

  
      <div className="page">
          <section className="header" >
            <div className="line"></div>
             <div className="chooseGame">CHOOSE GAME</div>
             <div className="line"></div>
          </section>
      <div className="games">
      <button 
        className="prev"
        onClick={() => this.prevgame()} 
        disabled={game.index === 0}
      ><FontAwesomeIcon icon={faChevronLeft} /></button>
        
          <ContestCard game={game} />
       
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

export default ContestCardContainer;
