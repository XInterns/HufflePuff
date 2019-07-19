import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SelectPlayerNavbar from './SelectPlayerNavbar';
import Batsmen from './Batsmen';
import WicketKeeper from './WicketKeeper';
import Bowler from './Bowler';
import AllRounder from './AllRounder';
import './AddPlayers.css';

const AddPlayers=() => {
    return (
        <BrowserRouter>
            <div className="selectPlayerContainer">
            <SelectPlayerNavbar id="select player" link="/Batsmen" heading = "Select Player" link1="Batsmen" link2="Bowler" link3="Wicket Keeper" link4="All Rounder"/>
                <Switch>
                    <Route path='/batsmen' component={Batsmen} />
                    <Route path='/wicketKeeper' component={WicketKeeper} />
                    <Route path='/bowler' component={Bowler} />
                    <Route path='/allRounder' component={AllRounder} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AddPlayers;