import React from 'react'
import PlayerCard from './PlayerCard';
// import SelectPlayerNavbar from './SelectPlayerNavbar';
import './AddPlayers.css'

function Bowler() {
    return (
        <div class="bowler">
            {/* <SelectPlayerNavbar/> */}
            <PlayerCard />
            <PlayerCard />
            <PlayerCard/>
        </div>
    )
}

export default Bowler;