import React from 'react'
import PlayerCard from './PlayerCard';
// import SelectPlayerNavbar from './SelectPlayerNavbar';
import {connect} from 'react-redux';
import './AddPlayers.css';

function Batsmen(props) {
    const {choosePlayer} = props;
    // console.log(choosePlayer);
    return (
        <div className="batsmen">
            { choosePlayer && choosePlayer.map(batsman => {
                if((batsman.team === 'India' || batsman.team === 'Bangladesh') && batsman.type === 'batsman'){
                    // console.log(batsman);
                    return <PlayerCard playerform = {batsman}/>
                    
                }
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
      choosePlayer: state.player.players
    }
  };
  
export default connect(mapStateToProps)(Batsmen);
