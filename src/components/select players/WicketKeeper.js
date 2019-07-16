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
            { choosePlayer && choosePlayer.map(wk => {
                if((wk.team === 'India' || wk.team === 'Bangladesh') && wk.type === 'wicketkeeper'){
                    // console.log(wk);
                    return (<PlayerCard playerform = {wk}/>)
                    
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
