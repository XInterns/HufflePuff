import React from 'react'
import PlayerCard from './PlayerCard';
// import SelectPlayerNavbar from './SelectPlayerNavbar';
import {connect} from 'react-redux';
import './AddPlayers.css';

function Bowler(props) {
    const {choosePlayer} = props;
    return (
        <div className="batsmen">
            { choosePlayer && choosePlayer.map(bowler => {
                if((bowler.team === 'India' || bowler.team === 'Bangladesh') && bowler.type === 'bowler'){
                    console.log(bowler.type)
                    return (<PlayerCard playerform = {bowler}/>)
                    
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
  
export default connect(mapStateToProps)(Bowler);
