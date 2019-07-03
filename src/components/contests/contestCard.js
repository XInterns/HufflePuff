import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
const ContestCard = ({ game }) => {
  const { index, picture, team_1,team_2, date,link } = game;
  return (
  
    <div id={`card-${index}`} className="card">
      <img src={picture} className="game-img" />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="date">
          {date}
         </p>
         <p className="match">
          {team_1} vs {team_2}
        </p>
        <div className="game">
        <Link to  ={link}>
          <button className="joinGame">Enter Game</button>
          </Link>
        </div> 
      </div>
    </div>
  
  );
}

ContestCard.propTypes = {
  game: PropTypes.object.isRequired
};

export default ContestCard;
