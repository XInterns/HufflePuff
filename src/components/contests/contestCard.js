import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
 
const ContestCard = (props) => {

  
  const { index, pic, team_1, team_2, date, link} = props.game;
  return (
    <label htmlFor="join game button">
    <div id={`contestCard-${index}`} className="contestCard">
      <img src={pic} className="game-img" alt="unabletodisplay" />
      <div className="details">
        {/* <span className="index">{index + 1}</span> */}
        <p className="date">{date}</p>
        <p className="match">
          {team_1} vs {team_2}
        </p>
        <div className="game">
          <Link to={link}>
            <button id="join game button" className="joinGame" value={index} onClick={() => props.gameHandler(props.game)}>Enter Game</button>
          </Link>
        </div>
      </div>
    </div>
    </label>
  );
};

const mapStateToProps = (state) => {
  return{
    contestChosen: state.contest.games,
    userData: state.contest.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    gameHandler: (game) => dispatch({type: 'GAME_CHOSEN', payload:game})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContestCard);