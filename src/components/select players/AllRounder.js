import React from 'react'
import PlayerCard from './PlayerCard';
// import SelectPlayerNavbar from './SelectPlayerNavbar';
import {connect} from 'react-redux';
import './AddPlayers.css';

function AllRounder(props) {
    const {choosePlayer} = props;
    return (
        <div className="batsmena">
            { choosePlayer && choosePlayer.map(allrounder => {
                if((allrounder.team === 'India' || allrounder.team === 'Bangladesh') && allrounder.type === 'allrounder'){
                    // console.log(allrounder);
                    return (<PlayerCard playerform = {allrounder}/>)
                    
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
  
export default connect(mapStateToProps)(AllRounder);
