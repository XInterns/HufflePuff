import React from 'react'
import PlayerCard from './PlayerCard';
// import SelectPlayerNavbar from './SelectPlayerNavbar';
import './AddPlayers.css'

function WicketKeeper() {
    return (
        <div className="wicketKeeper">
            <PlayerCard />
            <PlayerCard />
        </div>
    )
}

export default WicketKeeper