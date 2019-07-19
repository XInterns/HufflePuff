import React from 'react'
import PlayerCard from './PlayerCard';
import './AddPlayers.css'

function Bowler() {
    return (
        <div class="bowler">
            <PlayerCard />
            <PlayerCard />
            <PlayerCard/>
        </div>
    )
}

export default Bowler;