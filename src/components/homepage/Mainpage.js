import React from 'react';
import ImageDivs from './ImageDivs';
import Section from './Section';
import {connect} from 'react-redux';
import './ImageDivs.css'
// import  {BrowserRouter,  Switch, Route } from 'react-router-dom';
// import Contests from "../../components/contests";
// import AddPlayers from '../select players/AddPlayers';
// import SignInModalLauncher from '../sign_in/SignInModalLauncher';

const Mainpage = (props) => {
    const { isLogged } = props;
    // console.log(isLogged);
    return (
        // <BrowserRouter>
        <div class="mainpage">
            <ImageDivs classname= "pimg1" imageText="XPL XEBIA PREMIER LEAGUE"/>
            <Section  sectionId="cricket" 
                heading="Cricket" 
                content="Are you a die hard cricket fan? Are you somebody who is 
                EMOTIONALLY invested in this sport? Come show your wizardly 
                forecast using your magical information about your favorite
                players and earn Xe-Points. Enter the pool of your choice,
                make your dream-team of 11 players using your credit and 
                you're all set! All you need to do is wait for the leaderboard 
                and watch your name appear on it. Start betting now!>" />
      
            <ImageDivs classname= "pimg2" imageText="Start Betting" />
            <Section sectionId="tabletennis" heading="Table Tennis" 
               content="Ma Long, Timo Boll, Xu Xing.. If you know who these people are and get awestruck by their awesome table tennis skills then this is the right place for you to be! Bet on your favorite player and win exciting prizes!"
               />

            <ImageDivs classname= "pimg3" imageText="Start Betting" />
            <Section sectionId="football" heading="Football" 
               content= ""/>
            <ImageDivs classname="pimg4" imageText="Start Betting" />
      
            <ImageDivs classname="pimg1" imageText="Start Betting" />
            {/* <Switch>
                <Route path='/contests' component={Contests}></Route>
                <Route path='/batsmen' component={AddPlayers}></Route>
            </Switch> */}

                
        </div>
        // </BrowserRouter>
    )
}

// remove after complete testing
const mapStateToProps = (state) => {
    return{
        isLogged: state.auth.isLogged
    }
  };

export default connect(mapStateToProps)(Mainpage);

