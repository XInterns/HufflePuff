import React from 'react'
import PlayerCard from './PlayerCard';
// import SelectPlayerNavbar from './SelectPlayerNavbar';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './AddPlayers.css';

function AllRounder(props) {
    const {choosePlayer} = props;
    console.log(props);
    return (
        <div className="batsmen">
            { choosePlayer && choosePlayer.map(allrounder => {
                if((allrounder.team === 'India' || allrounder.team === 'Bangladesh') && allrounder.type === 'allrounder'){
                    // console.log(allrounder);
                    return (<PlayerCard playerform = {allrounder}/>)
                    
                }
            })}
            {/* <div>
            <Link to = "/bidplaced"><button>BID IT</button></Link>
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
      choosePlayer: state.player.players,
    //   userPoolData: state.pool.user,
    //   userData: state.contest.user
    }
  };
  
export default connect(mapStateToProps)(AllRounder);
