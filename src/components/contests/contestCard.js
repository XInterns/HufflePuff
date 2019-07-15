import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
 
const ContestCard = ({ game }) => {

  function handleClick(e){
    console.log(e.target.value);
  }
  
  const { index, picture, team_1, team_2, date, link ,pool_value} = game;
  return (
    <label htmlFor="join game button">
    <div id={`contestCard-${index}`} className="contestCard">
      <img src={picture} className="game-img" alt="unabletodisplay" />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="date">{date}</p>
        <p className="match">
          {team_1} vs {team_2}
        </p>
        <div className="game">
          <Link to={link}>
            <button id="join game button" className="joinGame" value={pool_value} onClick={handleClick}>Enter Game</button>
          </Link>
        </div>
      </div>
    </div>
    </label>
  );
};

ContestCard.propTypes = {
  game: PropTypes.object.isRequired
};

export default ContestCard;
