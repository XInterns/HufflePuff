import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
const Card = ({ game }) => {
  const { index, picture, team_1,team_2, date } = game;
  return (
  
    <div id={`card-${index}`} className="card">
      <img src={picture} />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="date">
          {date}
         </p>
         <p className="match">
          {team_1} vs {team_2}
        </p>
        <div className="game">
        <Link to  ="/CricketPools">
          <button className="joinGame">Enter Game</button>
          </Link>
        </div> 
      </div>
    </div>
  
  );
}

Card.propTypes = {
  game: PropTypes.object.isRequired
};

export default Card;
