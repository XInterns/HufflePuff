import React from 'react'
import PlayerCard from './PlayerCard';
// import SelectPlayerNavbar from './SelectPlayerNavbar';
import './AddPlayers.css';

function Batsmen() {
    return (
        <div className="batsmen">
            <PlayerCard />
            <PlayerCard />
        </div>
    )
}

export default Batsmen
